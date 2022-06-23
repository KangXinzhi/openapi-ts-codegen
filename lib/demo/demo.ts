#!/usr/bin/env node

import {$} from 'zx'
// import 'zx/globals'
import os from 'os'
import path from 'path'



// const basedir = __dirname
// console.log('basedir: ', basedir)
void async function() {
  await $`mkdir test`
  console.log(1)
}()

// void async function osPackage() {
//   await $`cd ${os.homedir()} && mkdir example`
// }

// void async function  pathPackage() {
//   await $`mkdir ${path.join(basedir, 'output')}`
// }

// void async function() {
//   await $`echo '---' >> ./file.txt`
//   await $`cat ./file.txt`.pipe(process.stdout)
//   await $`rm ./file.txt`

//   cd(`/tmp`)
//   await $`pwd`
// }

// void async function() {
//   await nothrow($`grep something from-file`)

//   // inside a pipe()
//   // await $`find ./examples -type f -print0`
//   // .pipe(nothrow($`xargs -0 grep something`))
//   // .pipe($`wc -l`)
// }

// void async function() {
//   let packages = await globby(['package.json', 'packages/*/package.json'])
//   console.log('packages: ', packages)
// }

// void async function() {
//   let files = ['package.json']
//   await $`tar cz ${files}`
// }()