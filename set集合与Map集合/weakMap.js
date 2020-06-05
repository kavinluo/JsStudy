/*
 * @Author: kevin
 * @Date: 2020-06-05 11:05:08
 * @LastEditTime: 2020-06-05 14:09:57
 * @Description: 
 */ 


 let map = new WeakMap()
 let ele = document.querySelector('.element')
 map.set(ele, 'Original')
 
console.log(map)

let val = map.get(ele)
console.log(val)

// ele.parentNode
ele.parentNode.removeChild(ele)
ele = null 
console.log(map)

console.log(map.get(ele)) // undefined


let person = (function(){
  let private = new Map()
  function Person (name) {
    console.log('name',name)
    private.set(this, {name: name});
  }
  Person.prototype.getName = function() {
    return private.get(this).name
  }
  return Person
}())
let or = new person('kevin')
console.log(or.getName())
