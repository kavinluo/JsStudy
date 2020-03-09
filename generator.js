// # generators 

// 常规函数只会返回一个 具体值或者 undefined
// 而generators 可以按需逐个生产 ('yield') 多个值

// 创建 generator， function*
function* generators(){
  yield 1;
  yield 2;
  yield 3
  return 4
}
// 当执行generator函数时，不是直接返回函数体的代码，而是返回一个特殊的对象 
console.log(generators())
let gener = generators()
console.log(gener)
//gener.next()
console.log(gener.next()) //{value: 1, done: false}
console.log(gener.next()) //{value: 2, done: false}
console.log(gener.next()) //{value: 3, done: false}
console.log(gener.next()) //{value: 4, done: true}
console.log(gener.next()) //{value: undefined, done: true}



// generators 是可迭代的
// 可以通过for..of循环迭代所有的值
let generator = generators()
for(let value of generator){
  console.log(value) // 1 2 3 
}


function* generateSequence(){
  yield 1;
  yield 2;
  yield 3;
  return 4
}
let sequence = [0, ...generateSequence()]
console.log(sequence) // [0,1,2,3]



function* createIterator(items){
  for(let i = 0; i < items.length; i++){
    yield items[i]
  }
}
let array = [1,2,3,4]
let iterator = createIterator(array)

console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next().value) // 2

// yield 的使用限制，
// yield 只可以在生成器内部使用，在其他地方使用会导致程序抛出错误，即便是在生成器内部的函数使用也是如此
function* createTterators(items) {
  items.forEach(item => {
    //语法错误
    //yield item + 1
  });
}
// 从字面上看 yield关键字确实在 createTterators() 函数内部，但是它与return关键字一样，二者都不能穿透函数边界，
//嵌套在函数中的return语句不能作用外部函数的返回语句，而此处嵌套函数中的yield语句会导致语法错误


// Note 不能用箭头函数来创建生成器


// ## 生成器对象的方法
let obj = {
  createIterator: function* (items) {
    for (let i = 0; i < items.length; i++){
      yield items[i]
    }
  }
}

let o = obj.createIterator(array)
console.log(o.next());

// ## 通过ES6函数方法的简写方式来创建生成器。只需要在函数名前加一个（*）号
let objs = {
  *createIter(items) {
    for (let i = 0; i < items.length; i++){
      yield items[i];
    }
  }
}
let NCreate = objs.createIter(array)
 console.log(NCreate.next())

 // ## 创建可迭代的对象
 let collection = {
   items: [],
   *[Symbol.iterator](){
     for(let item of this.items){
       yield item
     }
   }
 }
 collection.items.push(1)
 collection.items.push(2)
 collection.items.push(3)
 for(let x of collection){
   console.log(x) // 1,2.3
 }

 // ## 内建迭代器
 // - entries() 返回一个迭代器，其值为多个键值对
 // - value() 返回一个迭代器。其值为集合的值
 // - keys() 返回一个迭代器，其值为集合中的所有键名

 // ### entries()
  let colors = ['red','green','blue']
  let tracking = new Set([123,456,789])
  let data = new Map()
  data.set('title','understabnding ESMAScript 6')
  data.set('format','ebook')

  for(let entry of colors.entries()){
    console.log(entry) //[0,'red'],[1,'green'] [2,'blue']
  }

  for(let entry of tracking.entries()){
    console.log(entry) // [123, 123] [456, 456] [789, 789]
  }
  for(let entry of data.entries()){
    console.log(entry)//["title", "understabnding ESMAScript 6"],["format", "ebook"]
  }

 // ### values()迭代器
 for(let val of colors.values()){
   console.log(val) // red ,green, blue
 }
 for(let val of tracking.values()){
   console.log(val) // 123, 456, 789
 }
 for(let val of data.values()){
   console.log(val) // understabnding ESMAScript 6, ebook
 }

  // ### keys() 迭代器

  for(let key of colors.keys()){
    console.log(key) // 0 ,1, 2
  }
  for(let key of tracking.keys()){
    console.log(key) // 123, 456, 789
  }
  for(let key of data.keys()){
    console.log(key) // title, format
  }

  // 不同集合类型的默认迭代器
  // 在for-of 中 如果没有显式指定则使用默认的带点钱，
  // 数字和set集合的默认迭代器是 values(),
  // Map集合的默认迭代器是 entries(),

  // 与调用 colors.values()一样
  for(let val of colors){
    console.log('默认',val)
  } 
  // 与调用 tracking.values()一样
  for(let key of tracking){
    console.log('默认',key) 
  }
  // 与调用 data.entries()一样
  for(let key of data){
    console.log('默认',key) 
  }
 // ## 字符串迭代器
 var message = 'A 到 B'
 for (let i = 0; i < message.length; i++){
  console.log(message[i])
}

 // 展开运算符与非数组可迭代对象
let set = new Set([1,2,3,4,5,6])
let arrays = [...set] 
console.log(arrays)

