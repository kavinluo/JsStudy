// Object.js 方法来弥补全等运算符的不准确运算
// 该方法接受两个参数 如果这两个参数类型相同 且具有相同的值 则返回 true

console.log(+0 == -0) // true

console.log(+0 === -0) // true

console.log(Object.is(+0, -0)) // false

console.log(NaN  == NaN) // false

console.log(NaN === NaN) // false

console.log(Object.is(NaN, NaN)) // true

console.log(6 == 6 ) // true 

console.log(6 == '6') // true 

console.log(6 === 6) // true

console.log(6 === '6') // false

console.log(Object.is(6, 6)) // true

console.log(Object.is(6, '6')) // false