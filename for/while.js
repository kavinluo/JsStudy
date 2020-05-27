
// 循环：while 和 for





// while 循环
/* let i = 9;
 while (i < 14){
   console.log('i',i);
  //  i++
 } */

 function fnarray(...arg){
   let sum = null
  for (const item of arg ) {
    sum += item
    console.log(item)
  }
  return sum
 }
 fnarray(4,7,8,9)

 console.log(fnarray(4,7,8,9))

 let arr1 = [1, -2, 44, 4];
let arr2 = [8, 3, -8, 1];

let arry3 = [arr1,arr2]

console.log(...arry3);

fnarray(...arr1,...arr2)
// alert( Math.max(...arr1, ...arr2) ); // 8
let math = Math.max(...arr1,...arr2)

console.log(math,'math')

