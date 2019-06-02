//Дана строка, состоящая из букв A-Z:
//AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
//Нужно написать функцию RLE, которая на выходе даст строку вида:
//A4B3C2XYZD4E3F3A6B28
let s = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';
let s1 = 'AA'
let s2 = 'A'
let s3 = 'AB'
let s4 = 'ABB'

function rle(str) {
    if (str.length < 0 && new RegExp(/^[A-Z]*$/g).test(str)) {
        throw Error('invalid');
    }
    if (str.length === 1) {
        return str;
    }
    let arr = str.split('');
    let res = '';
    let currentLatter = arr[0];
    let summaryArr = [{latter: arr[0], count: 1}];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentLatter) {
            summaryArr[index].count++;
        } else {
            index++;
            currentLatter = arr[i];
            summaryArr[index] = {latter: arr[i], count: 1}
        }
    }
    summaryArr.forEach(item => {
        if (item.count > 1) {
            res += `${item.latter}${item.count}`
        } else {
            res += `${item.latter}`
        }
    })
    return res;
}
rle(s);
rle(s1);
rle(s2);
rle(s3);
rle(s4);
