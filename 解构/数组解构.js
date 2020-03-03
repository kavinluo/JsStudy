let colorArry = [ 'red', 'green', 'blue'],
firstColor = 'black',
secondColor = 'yellow';

 [ firstColor, secondColor] = colorArry

console.log(firstColor) // red
console.log(secondColor) // green

let [, , thirdColor] = colorArry

console.log(thirdColor) // blue

// 变量交换

let a = 1,
    b = 2;

[ b, a ] = [ a, b]

console.log('b', b) // 1
console.log('a', a) // b


// 默认值

 let colors = ['red0', ['green0', 'lightreen'], 'blue'];

 let [firstC, [secondC]] = colors 

 console.log(firstC) // red0
 console.log(secondC) // green0

// 不定元素
let [ first,...colorA] = colors
console.log(first)
console.log(colorA)

// 混合解构
let mixed = {
  type: 'indetifier',
  name: 'foo',
  loc: {
    start:{
      line:1,
      column: 1
    }
  },
  range: [ 0, 3 ]
}

let {loc:{start},range: [startIndex]} = mixed

console.log(start.column) //1
console.log(startIndex) // 0



// 解构参数
let parm = {
  secure: true,
  expires:6000
}
function setCookie(name, value, {secure, path, domain, expires} ={}){ // 如果不传递第三个参数给一个默认值
  console.log(name);
  console.log(expires)
}
setCookie('type', 'js', parm) 