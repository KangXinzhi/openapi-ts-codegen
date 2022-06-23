#!/usr/bin/env zx
// Node.js >= 14.13.0
//@ts-ignore
console.log("Hello, zx")
// https://www.npmjs.com/package/zx

// 0.create filedir
let name = 'foo & bar'
await $`mkdir ${name}`

console.log("Hello, zx2")


// 1.create file
// await $`echo '---' >> ~/abc`
// let count = parseInt(await $`ls -1 ~ | wc -l`)
// console.log(`Files: ${count}`)

// 2.remove file
// await $`rm ~/abc`
// count = parseInt(await $`ls -1 ~ | wc -l`)
// console.log(`Files: ${count}`)
// 2.remove filedir
// await $`rm -rf ${name}`

// 3.error
// try {
//   await $`exit 1`
// } catch(p) {
//   console.log(`Exit code: ${p.exitCode}`)
//   console.log(`Error: ${p.stderr}`)
// }

// func utils
// 4.shell cd
// cd('/tmp')

// 5.node-fetch
// const res = await fetch('https://api.uskid.com/inside/user/partner?token=AGRXnoXDV2Ag6NDVIzloOyupNQAkAFVK&schoolId=116&ms=116&partner=www');
// if (res.ok) {
//   console.log(await res.text())
// }

// 6.readline
// const env = await question('Choose a env: ', {
//   choices: Object.keys(process.env),
// })
// console.log('env: ', env)

// 7.setTimeout 实现 sleep
// await sleep(1000)

// 8.彩色输出 chalk
// console.log(chalk.blue('This is blue'))

// 9.fs-extra
// const content = await fs.readFile('../package.json')
// console.log('content: ', content.length)

// 10.额外的 Polyfill
// __filename __dirname
// console.log(__filename, __dirname)

// 11. require
// const { name } = require('../package.json')
// console.log(name)

// 12.you can pass an array of arguments if needed
// let flags = [
//   '--oneline',
//   '--decorate',
//   '--color',
// ]
// await $`git log ${flags}`