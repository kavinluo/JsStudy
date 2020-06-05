/*
 * @Author: kevin
 * @Date: 2020-05-15 14:08:48
 * @LastEditTime: 2020-06-05 16:23:50
 * @Description: ES6 class
 */ 
class PowerArray extends Array {
  isEmpty(){
    return this.length.length === 0
  }
}

let arr = new PowerArray(1,3,5)
console.log(arr.isEmpty())

let filter = arr.filter(item =>{
    return item >= 2
})

console.log(filter)

console.log(arr.constructor === PowerArray) // true

class Person {
  constructor( name ) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
    return this.name
  }
}

let person = new Person('kevin')

console.log(person.name) // kevin
console.log(person.sayName()) // kevin

console.log(person instanceof Person) // true
console.log(person instanceof Object)

console.log(typeof Person) // function

console.log(typeof Person.prototype.sayName) // function


// 检查调用时 是否用了 new
let person2 = (function(){
  'use strict'
  const person2 = function(name){
    if (typeof new.target === 'undefined'){
      throw new Error('constructor must be called with new')
    }
    console.log(new.target)
    this.name = name
  }
  Object.defineProperty(person2.prototype,'sayName',{
    value: function(){
      if (typeof new.target !== 'undefined'){
        throw Error('Method cannot be called with new');
      }
      console.log(this.name)
    },
    enumerable: false,
    writable: true,
    configurable: true
  })
  return person2
}())

let son =  new person2('kevin')

console.log(son.name)



// 类表达式
let perclass = class {
  constructor (name){
    this.name = name
  }
  sayName() {
    console.log(this.name)
    return this.name
  }
}

let pers = new perclass('sansa')
console.log(pers.sayName())

// 作为一等公民的类
function createObject( classDef ){
  return new classDef()
}
let obj = createObject(class {
  sayHh() {
    console.log('Hi')
  }
})

obj.sayHh()


let perso = new class {
  constructor( name ){
    this.name = name
  }
  sayName () {
    console.log(this.name)
  }
}('Nicholas')

perso.sayName()



// 访问器属性
class CustomHtml {
  constructor(element){
    this.element = element;
  }
  get html(){
    return this.element.innerHTML
  }
  set html( val ){
    this.element.innerHTML = val
  }
}

let descriptor = Object.getOwnPropertyDescriptor(CustomHtml.prototype, 'html');
console.log('get' in descriptor) // true
console.log('set' in descriptor) //  true
console.log(descriptor.enumerable) // false


// 可计算的成员名
let methodName = 'sayName'
class press {
  constructor(name){
    this.name = name
  }
  [methodName](){
    console.log(this.name)
  }
}
let me = new press ('Jams--')
me.sayName()


// 生成器
 class Myclass {
   *createIter(){
     yield 1;
     yield 2;
     yield 3;
     yield 4;
   }
 }
 let instance = new Myclass()
 let iterator = instance.createIter()
 console.log(iterator)