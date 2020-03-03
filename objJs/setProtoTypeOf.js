
// setProtoTypeOf (obj, obj1) 
// 接收两个参数 
// obj1 被改变原型的对象 obj2替换第一个参数原型的对象
let obj1 = {
  getGreeting(){
    return "hello"
  }

}

let obj2={
  getGreeting(){
    return 'Woof'
  }
}

let friend = Object.create(obj1)
console.log(friend.getGreeting()) // hello

console.log(Object.getPrototypeOf(friend) === obj1) // true

Object.setPrototypeOf(friend,obj2)
console.log(friend.getGreeting()) // Woof
console.log(Object.getPrototypeOf(friend) === obj2) // true