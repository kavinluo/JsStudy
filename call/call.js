/*
 * @Author: kevin
 * @Date: 2020-06-05 16:20:05
 * @LastEditTime: 2020-06-05 18:00:43
 * @Description: 
 */ 

 let obj = {
   name:'kevin',
   age :77
 }

 function fn(names) {
  this.name = names
  console.log(this.name)
  console.log(this.age)
}
 fn.call(obj,'jams')

 
 