
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