import data from './data'
import 'zx/globals'
import { formatFolderName } from './util'

const defaultUseBanner = `
/**
 * scripts-fence ${new Date()}
 */

import { BaseOptions } from '@ahooksjs/use-request/lib/types'
import { useRequest } from 'ahooks'
import { get, post, Url } from '@/utils/request'

`

void async function () {
    const projectName = await userInput([`请输入项目名称`])
    if (!projectName) return
    await cd(`./dist`)
    await $`mkdir ${projectName}`
    await cd(`${projectName}`)
    for (let item in data.paths) {
        console.log(item)
        // @ts-ignore
        createFolder(item, data?.paths?.[item])
    }

    // makeDir()
    // console.log()

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
 *  根据path mkdir-p 批量生成文件夹，根据生成的文件夹生成ts文件
 * */
async function createFolder(i: string, folder: any) {
    // 地址以/开头的去掉第一个/后，转化为数组
    let item = i.replace(/^\//, '').split('/').map(item => formatFolderName(item))
    const name = formatFolderName(item.join('-'))
    // 匹配url最后一个/后的正则 /\/([^/]+)$/
    let folderUrl = './' + item.join('/').replace(/\/([^/]+)$/, '')
    let fileUrl = './' + item.join('/')

    await $`mkdir -p ${folderUrl}`
    await $`touch ${fileUrl}.ts`
    // await $`echo ${defaultUseBanner} >> ${fileUrl}.ts`

    // 判断是get请求还是post请求
    if (folder.get) {

        // 判断get请求是否是分页列表
        const isPageSize = folder.get.parameters.findIndex((it: { name: string }) => it.name === 'pageSize') > -1
        if (isPageSize) {
            const createFileContent = `
${defaultUseBanner}
import { PaginationResponse } from '../common'
export type TGet${name}ListRequest = {
  page: number
  pageSize: number
}

export type TGet${name}ListItem = {
  page: number
  pageSize: number
}

export type TGet${name}ListResponse = PaginationResponse<TGet${name}ListItem[]>

const getExternalCourseList = get<
  TGet${name}ListResponse,
  TGet${name}ListRequest
>(\`\${uskidFrontendCommon.uskidGardenGoApi}\` as Url)

export default getExternalCourseList
            `
            await $`echo ${createFileContent} >> ${fileUrl}.ts`
        }


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


