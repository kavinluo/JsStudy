let set = Object.create(null)
console.log('set',set); //{}

set.foo = true

if(set.foo){
  console.log('yes')
}


// Map 
let map = Object.create(null)
map.foo = 'bar'
let value = map.foo
console.log(value) // bar

// 研究一下代码

let maps = Object.create(null)
maps[3] = 'foo'
console.log(maps[3])

console.log(maps[3]) //{'3' :'foo'}



let mapp = Object.create(null)
let key1 = {};
let key2 = {};
mapp[key1] = 'foo'
console.log('999',mapp[key2])
console.log('object',mapp)


let mmp = Object.create(null)
mmp.count = 1

if(mmp.count){
  // do something
}


// 创建set

let seta = new Set()
seta.add(5)

seta.add('5')
console.log(seta) // {5 ,'5'}

console.log(seta.size)


let sets = new Set()
let keys = {}
let keyd = {}
sets.add(keys)
sets.add(keyd)

console.log('sets',sets)


// 数组初始化
let array = [1,3,7,7,6,4,2,1]
let setA = new Set(array)
setA.add(88)
console.log('setA',setA);
// 通过 has() 方法来测试某个值是否存在于Set中
console.log('setA.has',setA.has(1)); //true


// 移除
setA.delete(88)
console.log(setA)

// 清除
// setA.clear()
console.log(setA)

// set中的 forEach 方法
// forEach() 方法会被传递一个回调函数，该回调接受3个参数
// 1, Set 中下个位置的值
// 2, 与第一个参数相同的值
// 3, 目标Set自身

setA.forEach((val, key, ownerSet)=>{
  console.log('val',val + '-' + key)
  console.log(ownerSet === setA)
})

// 将 Set转换为数组
let changeArray = [...setA]
console.log(changeArray) //[ 1, 3, 7, 6, 4, 2 ]

// 数组去重复
let repeat = [44,55,44,56,77,4,3,56]
let resRepeat = [...new Set(repeat)]
console.log(resRepeat)



