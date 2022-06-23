import fs from 'fs'
import os from 'os'

// 写入文件
fs.writeFile("test.txt", "hello world!", function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
});

//向文件追加内容
fs.appendFile("test.txt", `${os.EOL}追加文件${os.EOL}`, 'utf-8', function(err) {
  if(err) {
      console.log(err);
      return false;
  }
  console.log('写入成功!!!');
});

//读取文件
fs.readFile("test.txt", function(err, data) {
  if(err) {
      console.log(err);
      return false;
  }
  console.log(data.toString());
});

//unlink删除文件 
fs.unlink('test.txt',function(err) {
  if(err){
      console.log(err);
      return false;
  }
  console.log('删除文件成功');
});

//判断文件/目录是否存在
fs.access('test.txt',(err)=>{
  console.log(err ? '目录/文件不存在': '文件存在,可以进行读写');
});