import data from './data'
import 'zx/globals'
import { formatFolderName } from './util'

const basedir = __dirname

void async function () {
    const projectName = await userInput([`请输入项目名称`])
    if (!projectName) return
    await cd(`./dist`)
    await $`mkdir ${projectName}`
    await cd(`${projectName}`)
    createFolder('/external-course/2/3/list')

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
 *  根据path生成数组，数组最后一项生成文件名，其他为文件夹的名称
 *  例如：/external-course/list 生成['externalCourse','list']数组,生成externalCourse文件夹下的list.ts文件
 *  */
async function createFolder(i: string) {
    // 地址以/开头的去掉第一个/后，转化为数组
    let item = i.replace(/^\//, '').split('/').map(item => formatFolderName(item))
    item.forEach(async (_i, index) => {
        if (index === item.length - 1) {
            await $`touch  ${_i}.ts`
        } else {
            await $`cd ./${_i}  || mkdir ${_i}`
            await cd(`./${_i}`)
            console.log(index,_i,$`pwd`)
        }
    })
}
