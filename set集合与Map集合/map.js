/*
 * @Author: kevin
 * @Date: 2020-06-05 09:47:26
 * @LastEditTime: 2020-06-05 11:04:54
 * @Description: 
 */ 

 let map = new Map()
 map.set('title','undersanding ES6')
 map.set('year', 2020)
 map.set(66, 666)
 console.log('map',map)

 console.log(map.get('title')) // undersanding ES6
 console.log(map.get('year')) // 2020
 console.log(map.get(66)) // 666

 
 // 将对象作为键值对

 let objMap = new Map()
 let key2 = {}
 let key4 = {}

 objMap.set(key2, 222)
 objMap.set(key4, 4444)

 console.log(objMap.get(key2)) // 222
 console.log(objMap.get(key4)) // 
 
 console.log(objMap)


 console.log(objMap.has(key2))

 console.log(objMap.size) //2 获取map的长度

 let mapp = new Map([['name','kevin'],['age',55]])
 console.log(mapp) // Map { 'name' => 'kevin', 'age' => 55 }



 //Map  中的 forEach 方法
 objMap.forEach((val, key, ownerMap)=>{
  console.log('val',val +'-' + key) //222-[object Object]  4444-[object Object]
 })

 
 mapp.forEach((val, key, ownerMap)=>{
   console.log(val, key, ownerMap) // kevin name Map { 'name' => 'kevin', 'age' => 55 }    55 'age' Map { 'name' => 'kevin', 'age' => 55 }
 })
