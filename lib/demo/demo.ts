#!/usr/bin/env node

import { $, cd, nothrow } from 'zx'
// import 'zx/globals'
import os from 'os'
import path from 'path'



const basedir = __dirname




void async function () {
  let name = 'foo & bar'
  await $`mkdir ${name}`
}()

// 创建文件夹
// void async function() {
//   await $`mkdir test`
//   console.log(1)
// }()


// 进入根目录下创建文件夹
// void async function osPackage() {
//   await $`cd ${os.homedir()} && mkdir example`
//   console.log(os.homedir()) 
// }()


// void async function  pathPackage() {
//   await $`mkdir ${path.join(basedir, 'output')}`
// }()

// void async function() {
  // await $`echo '---' >> ./file.txt`
  // await $`cat ./file.txt`.pipe(process.stdout)
  // await $`rm ./file.txt`
// }()

// void async function() {
  // await nothrow($`grep something from-file`)

  // inside a pipe()
  // await $`find ./examples -type f -print0`
  // .pipe(nothrow($`xargs -0 grep something`))
  // .pipe($`wc -l`)
// }

// void async function() {
//   let packages = await globby(['package.json', 'packages/*/package.json'])
//   console.log('packages: ', packages)
// }

// void async function() {
//   let files = ['package.json']
//   await $`tar cz ${files}`
// }()