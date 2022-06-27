
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
function parserSchema(schema: any) {
    let result
    if (schema.type === 'object') {
        result = {}
        let properties = schema.properties

        for (let key in properties) {
            let item = properties[key]
            let isRequired = schema.required.inCludes(item) ? '' : '?'
            if (item.type === 'string') {
                let a = `{${item} ${isRequired}: string}` as unknown as object
                result = { ...result, ...a }
            } else if (item.type === 'integer' || item.type === 'number') {
                let a = `{${item} ${isRequired}: number}` as unknown as object
                result = { ...result, ...a }
            } else if (item.type === 'boolean') {
                let a = `{${item} ${isRequired}: boolean}` as unknown as object
                result = { ...result, ...a }
            } else if (item.type === 'object'|| schema.type === 'array') {
                let a = `{${item} ${isRequired}: ${parserSchema(item)}}` as unknown as object
                result = { ...result, ...a }
            }
        }
        return result
    } else if (schema.type === 'array') {
        parserSchema(schema.items)
    }
}