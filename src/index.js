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
module.exports = { sum, nativeNull, reversedString }