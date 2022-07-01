
// - 转驼峰
function formatFolderName(sName: string) {
  var arr = sName.replace(/^-/, '').split('-');  //利用反向思维：直接匹配提取所有的字符子串，var arr=sName.match(/^\w+/g);
  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].replace(/^\w/, function (ele) {
      return ele.toUpperCase();
    })
  }
  return arr.join('');
}

export { formatFolderName }


// 递归解析schema
function parserSchema(schema: any): any {
  if (schema.type === 'object') {
    let result = {}
    let properties = schema.properties
    for (let key in properties) {
      let item = properties[key]
      let isRequired = schema.required.includes(key) ? '' : '?'
      let k = `${key}${isRequired}`
      if (item.type === 'string') {
        let a = { [k]: 'string' }
        result = { ...result, ...a }
      } else if (item.type === 'integer' || item.type === 'number') {
        let a = { [k]: 'number' }
        result = { ...result, ...a }
      } else if (item.type === 'boolean') {
        let a = { [k]: 'boolean' }
        result = { ...result, ...a }
      } else if (item.type === 'object') {
        let a: any = { [k]: parserSchema(item) }
        result = { ...result, ...a }
      } else if (item.type === 'array') {
        let a: any = { [k]: parserSchema(item.items) + '[]' }
        result = { ...result, ...a }
      }
    }

    return JSON.stringify(result)
  } else if (schema.type === 'integer' || schema.type === 'number') {
    return 'number'
  } else if (schema.type === 'string') {
    return 'string'
  } else if (schema.type === 'boolean') {
    return 'boolean'
  } else if (schema.type === 'array') {
    const result = parserSchema(schema.items)
    return result + '[]'
  } else {
    return '{}'
  }
}



export const schema2ts = (schema: any) => {
  // 1.替换json文件中的双引号 2.替换json文件中的\ 3.逗号结尾换行 4.{符号开头和}结尾换行 5.空对象中取消换行
  const result = `${parserSchema(schema) || '{}'}`.replace(/\"/g, '').replace(/\\/g, '').replace(/,/g, ',\n').replace(/\{/g, '{\n').replace(/\}/g, '\n}').replace(/{\n\n}/, '{}')
  return result
}