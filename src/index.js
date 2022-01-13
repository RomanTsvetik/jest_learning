// function expect(value) {
//     return {
//         toBe: exp => {
//             if (value === exp) {
//                 console.log("success");
//             } else {
//                 console.log(`Value is ${value}, but expectation is ${exp}`);
//             }
//         }
//     }
// }
const sum = (a, b) => a + b;
// const sum = (a, b) => a + b + 1; //failed

const reversedString = str => str.split('').reverse().join(''); // без ошибок

// const reversedString = str => {
//     return str
//             .split('-')                 // ошибка
//             .reverse()
//             .join('')
// }

const nativeNull = () => null;

// expect(sum(41, 1)).toBe(44)

const getIndexOf = (arr, el) => {
    let fromIndex = 0;
    let index = -1;
    let i = 0;

    if (fromIndex >= arr.length) return index;

    if (fromIndex < 0) i = arr.length + fromIndex;

    for (i; i < arr.length; i++){
        if (el === arr[i]) {
            index = i;
            break;
        }
    }

    return index;
}

const getLastIndexOf = (arr, el) => {
    
    let fromIndex = arr.length;
    let index = -1;

    if (fromIndex < 0) fromIndex = 0;
    if (fromIndex > arr.length) fromIndex = arr.length;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (el === arr[i]) {
            index = i;
            break;
        }
    } 
    return index;

}


const getIncludes = (arr, el) => {
    let bool = false;
    let fromIndex = 0;

    if (fromIndex >= arr.length) return bool;
    if (fromIndex < 0) i = arr.length + fromIndex;
    
    arr.forEach(i => {
        if (el === i) bool = true;
    });
    return bool;
}


const arr = [1, 7, 3, 9, 5];
const getSomeEl = (callback) => {
    if (arr.length === 0) return false;

    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])) return true;
    }
    return false;
}


module.exports = {
    sum,
    nativeNull,
    reversedString,
    getIndexOf,
    getLastIndexOf,
    getIncludes,
    getSomeEl,
};

