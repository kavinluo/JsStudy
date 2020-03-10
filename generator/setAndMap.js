let set = new Set()
// Set 集合不会对所存的值做强值类型转换
set.add('6')
set.add(6)
console.log(set) 
console.log(set.size) //2

let setkey = new Set()
 let key1 = {}
 let key2 = {}
 setkey.add(key1)
 setkey.add(key2)

 console.log(setkey)
 console.log(setkey.clear())

 let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

let undef = new Set(values)
let arry = [...undef]
console.log(arry)


// 创建weak set 
// 支持3个方法 add()、 has()、 delete();

let weakSet = new WeakSet()
let key = {};
weakSet.add(key)
console.log(weakSet.has(key)) // true
weakSet.delete(key)
console.log(weakSet.has(key)) // false



// Map是储存着许多键值对的有序列表，其中的健名和对应的值支持多有的数据类型
// 健名的等价性判断是通过调用 Object.js()方法实现的。 5 和 ‘5’ 会被判断为两种数据类型

let map = new Map()
map.set('title','understanding ECMAScript 6')
map.set('year',2020)
console.log(map.get('title'))
console.log(map.get('year'))


let objMap = new Map()

let objkey = {};
let objkey1 = {}

objMap.set(objkey,'this is objkey')
objMap.set(objkey1,'this is objkey2')

console.log(objMap.get(objkey)) //this is objkey
console.log(objMap.get(objkey1)) // this is objkey2

console.log(objMap)

console.log(objMap.has(objkey)) // .has(key) 检测制定的健名是否存在map集合中
console.log(objMap.delete()) // .delete(key) 从指定健名中移除对应的值
console.log(objMap.clear()) // .clear() 移除所有map集合中所有键值对