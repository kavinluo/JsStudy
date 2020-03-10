let user = {
  name: 'kevin',
  age:30,

  toString(){
    return `{name:'${this.name}',age:${this.age}}`
  }
}

console.log( user)


let stunden = {
  name: 'kevin',
  age: 20,
  isAdmin: false,
  courses:['html','js','css'],
  wife:null
}

let json = JSON.stringify(stunden)

//字符串使用双引号。JSON 中没有单引号或反引号。所以 'kevin' 被转换为 "kevin"。
//对象属性名称也是双引号的。这是强制性的。所以 age:20 被转换成 "age":20。
console.log(json)
console.log(typeof json) // string

//一些特定于 JavaScript 的对象属性会被 JSON.stringify 跳过。

//函数属性（方法）。
//Symbolic 属性。/
//存储 undefined 的属性。

let other = {
  sayHi(){
    console.log('hello')
  },
  [Symbol('id')]: 123,
  somthing: undefined
}
console.log(JSON.stringify(other)) //{}

let date = new Date()
let strDate = date.toJSON()
console.log(strDate)

// JSON.parse
// str 要解析的字符串
// reviver可选的函数 function(key,value)，该函数将为每个 (key, value) 对调用，并可以对值进行转换。
//let value = JSON.parse(str, [reviver]);

let strArray = '[9,99,90]'
let objArray = JSON.parse(strArray)
console.log(objArray)


// JSON.parse(str, fn) 第二参数（函数）按照“原样”返回所有值
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, (key,value)=>{
  if(key == 'date') return new Date(value)
  return value
})

console.log(meetup) //{title: "Conference", date: Thu Nov 30 2017 20:00:00 GMT+0800 (中国标准时间)} }