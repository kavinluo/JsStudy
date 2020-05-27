
// 如何使用
// 首先接收一个对象或者数组
// 返回一个数组包含key值
let  obj = {
  name:'kevin',
  age:22,
  size:'body',
  weigth:170
}
let empt = []
let rest = Object.keys(obj).forEach((key)=>{
  empt.push(obj[key])
})
console.log(rest) // [ 'kevin', 22, 'body', 170 ]


let res = Object.keys(obj)
console.log(res) // [ 'name', 'age', 'size', 'weigth' ]
let emp = []
res.forEach((key)=>{
  emp.push(obj[key])
})
console.log(emp)//[ 'kevin', 22, 'body', 170 ]