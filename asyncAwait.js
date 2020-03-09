// # Aync/await //
// 在函数面前的【async]这个单词表达的是：这个函数总是返回一个promise。

async function f(){
  // console.log('async')
  return 'async'
}
f().then((r) => console.log(r)) // async
// f()
console.log(f()) // Promise

async function fn(){
  return Promise.resolve(66)
}
fn().then((r)=>console.log(r))


// ## Await
// 关键字await 让 JavaScript引擎待直到promise完成并返回结果

function hi(){
  console.log('--666')
  setTimeout(()=> console.log('hhhh'),1000)
}
hi()

setTimeout(()=> console.log('hh---hh'),1000)

async function fns(){
  let promise = new Promise((resolve, reject)=>{
    //resolve('hello---')
    setTimeout(()=>resolve('hello'),1000)
  })
  let result =  await promise
  console.log(result)
}
fns()


// # 不能在普通函数中是用 await 
// 如果尝试在非 async 函数中使用 await 的话，会报错
function fs() {
  let promise = Promise.resolve(7)
  //let result = await promise  // Syntax error // 如果函数前面没有 async 关键字， 就会得到一个语法错误，await只能在adync 函数中有效
}







 



 

