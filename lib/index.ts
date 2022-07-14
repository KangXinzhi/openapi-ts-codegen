import data from './data'
import 'zx/globals'
import { formatFolderName } from './util'
import { schema2ts } from './util'

const defaultUseBanner = `
/**
 * scripts-fence ${new Date()}
 */

import { get, post, Url } from '@/utils/request'
import { uskidFrontendCommon } from '@/config.json'
`

void async function () {
    const projectName = await userInput([`请输入项目名称`])
    if (!projectName) return
    await cd(`./dist`)
    await $`mkdir ${projectName}`
    await cd(`${projectName}`)
    for (let item in data.paths) {
        // @ts-ignore
        createFolder(item, data?.paths?.[item])
    }
}()

// 用户输入跟文件夹方法 
async function userInput(choices: string[]) {
    return await question(choices[0], {
        choices,
    })
}

/**
 *  方案一
 *  根据path生成数组，数组最后一项生成文件名，其他为文件夹的名称
 *  例如：/external-course/2/4/list 生成['externalCourse','2','3','list']数组,生成externalCourse/2/3/文件夹下的list.ts文件
 *  缺点: pwd获取当前文件夹的路径,有些乱,回退使用 cd ../ 比较繁琐
 * */
async function createFolder1(i: string) {
    // 地址以/开头的去掉第一个/后，转化为数组
    let item = i.replace(/^\//, '').split('/').map(item => formatFolderName(item))

    for (let i = 0; i < item.length; i++) {
        if (i === item.length - 1) {
            await $`touch test/${item[i]}.ts`
        } else {
            await $`cd ${item[i]} || mkdir ${item[i]}`
            await cd(`${item[i]}`)
        }
    }
}

/**
 *  方案二
 *  根据path mkdir-p 批量生成文件夹，根据生成的文件成ts文件
 * */
async function createFolder(url: string, folder: any) {
    const methods = folder.get ? 'get' : 'post'
    // 地址以/开头的去掉第一个/后，转化为数组
    let item = url.replace(/^\//, '').split('/').map(item => formatFolderName(item))

    // 文件名称字母大写
    const name = item[item.length - 1].replace(/^\w/, (s) => s.toUpperCase())
    // 数组最后一项为文件名称加入get或post前缀

    const fileItem = item.filter((i, index) => index < item.length - 1)

    // 匹配url最后一个/后的正则 /\/([^/]+)$/
    let folderUrl = './' + fileItem.join('/')
    let fileName = `${folderUrl}/${methods}${name}.ts`

    await $`mkdir -p ${folderUrl}`
    await $`touch ${fileName}`
    // await $`echo ${defaultUseBanner} >> ${fileUrl}.ts`

    // 判断是get请求还是post请求
    if (folder.get) {

        // 判断get请求是分页列表
        const isPageSize = folder.get.parameters.findIndex((it: { name: string }) => it.name === 'pageSize') > -1
        if (isPageSize) {
            const responses = schema2ts(folder.get.responses[200].content['application/json'].schema)
            const createFileContent = `
${defaultUseBanner}
import { PaginationResponse } from '../common'
export type TGet${name}ListRequest = {
  page: number
  pageSize: number
}

export type TGet${name}ListItem = ${responses}

export type TGet${name}ListResponse = PaginationResponse<TGet${name}ListItem[]>

const getExternalCourseList = get<
  TGet${name}ListResponse,
  TGet${name}ListRequest
>(\`\${uskidFrontendCommon.uskidGardenGoApi}${url}\` as Url)

export default getExternalCourseList
            `
            await $`echo ${createFileContent} >> ${fileName}`
            await $`npx prettier --write ${fileName}`
        } else {
            // 判断get请求不是分页列表
            const requestBody = schema2ts(folder.get?.requestBody?.content?.['application/json']?.schema || {})
            const responses = schema2ts(folder.get.responses[200].content['application/json'].schema)
            const createFileContent = `
${defaultUseBanner}
export type TGet${name}Request = ${requestBody}

export type TGet${name}Response = ${responses}

const get${name} = get<
  TGet${name}Response,
  TGet${name}Request
>(\`\${uskidFrontendCommon.uskidGardenGoApi}${url}\` as Url)

export default get${name}
        `
            await $`echo ${createFileContent} >> ${fileName}`
            await $`npx prettier --write ${fileName}`
        }
    } else if (folder.post) {
        // post请求
        const requestBody = schema2ts(folder.post.requestBody.content['application/json'].schema || {})
        const responses = schema2ts(folder.post.responses[200].content['application/json'].schema)
        const createFileContent = `
${defaultUseBanner}
export type TPost${name}Request = ${requestBody}

export type TPost${name}Response = ${responses}

const post${name} = post<
  TPost${name}Response,
  TPost${name}Request
>(\`\${uskidFrontendCommon.uskidGardenGoApi}${url}\` as Url)

export default post${name}
        `
        await $`echo ${createFileContent} >> ${fileName}`
        await $`npx prettier --write ${fileName}`
    }
}

export interface IDataPathsType {

    get?: {
        summary: string;
        "x-apifox-folder": string;
        "x-apifox-status": string;
        deprecated: boolean;
        description: string;
        tags: string[];
        parameters: {
            name: string;
            in: string;
            description: string;
            required: boolean;
            example: string;
            schema: {
                type: string;
            }
        }[];
        responses: {
            "200": {
                description: string;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                [key: string]: {}
                            };
                            required: string[];
                            "x-apifox-orders": string[];
                            "x-apifox-ignore-properties": never[];
                        };
                        examples: {};
                    };
                };
            };
        };
    };

    post?: any,
}


