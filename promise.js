//promise 对象有内部属性
// - state -- 最初是‘pending’, 然后被改为 ‘fulfilled’ 或 ‘rejected’
let state = true;
let promise = new Promise((resolve, reject)=>{

  if(!state){
    resolve('ok')
  }
   reject(new Error('err Whoops'))
  
})
let then = promise.then(
  res => console.log(res), // ok
  err => console.log(err)
  )
promise.catch(err=>console.log(err))
//  console.log(then.then(res=> console.log(res)))

//.then/catch 的处理器总是异步的
//当 .then/catch 处理器应该执行时，它会首先进入内部队列。JavaScript 引擎从队列中提取处理器，并在当前代码完成时执行 setTimeout(..., 0)

let promise1 = new Promise(resolve => resolve("done!"));

promise1.then(console.log(alert)); // 完成！（在当前代码完成之后）

console.log("code finished"); // 这个 alert 会最先显示

loadSrcipt=(src)=>{
  return new Promise((resolve, reject)=> {
    let script = document.createElement('script');
    script.src = src
    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error('Script load  error:' + src))
    document.head.append(script)
  })
}

let promis = loadSrcipt('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')

promis.then(
  script => console.log(`${script.src} is loaded!`),
  error => console.log(`Error:${error.message}`)
)
promis.then(script => console.log('One more handler to do something else!'))


// promise 链

new Promise((resolve, reject) => {
  setTimeout(()=> resolve(1),1000)
})
.then(res => res * 2)
.then(res => res * 2)
.then(res => res * 2)
.then(res => console.log('res',res)) //8

//正常来说，.then 处理程序返回的值会立即传入下一个处理程序。但是有一个例外。

//如果返回的值是一个 promise，那么直到它结束之前，下一步执行会一直被暂停。在结束之后，
//该 promise 的结果会传递给下一个 .then 处理程序。

// loadSrcipt('./setAndMap.js')
// .then(script => loadSrcipt('./function.js'))
// .then(script => loadSrcipt('./数组.js'))


fetch('https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/query')
  // 当远程服务器开始响应时，下面的 .then 执行
  .then(function(response) {
    // 当结束下载时，response.text() 会返回一个新的 resolved promise，该 promise 拥有全部响应文字
    return response.text();
  })
  .then(function(text) {
    // ...这是远程文件内容
    console.log('data',JSON.parse(text)); // {"name": "iliakan", isAdmin: true}
  });


  //promise 错误处理 
  //异步操作的时候可能会失败，如果出现错误，相应的 promise 就会 reject(如果远程服务无法访问
  // fetch 就会失败。 可以使用 .catch 去处理这些错误（rejection）

fetch('https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/query')
.then(res => res.json())
.catch(err => console.log('fetch',err))
// - 网站正常 但是相应数据不是衣蛾合法的json
fetch('/')
.then(res => res.json())
.catch(err => console.log('89Syntax',err))

// 隐式try...catch 
//Promise 和 promise 处理 程序周围有一个’不可见 try ...catch‘ 如果发生异常 他会被捕获并视为rejection

new Promise((resolve, reject)=>{
  throw new Error('Whoops!')
})
.catch((erro)=>console.log('97yy',erro))

// 以上代码等同于
new Promise((resolve, reject) =>{
  reject(new Error('Whoops!'))
}).catch(erro => console.log('102erro',erro))

try {
  console.log(uu)
} catch (erro) {
  console.log('109',erro)
}


// ## 重新抛出
// 常规 .catch中可以分析错误 ，对于promise来说也可以这样做

new Promise((resolve, reject)=>{
  throw new Error('This is a error')
})
.catch(erro => console.log('117',erro,'这里的错误会正常完成，所以会走到下一步'))
.then((res)=> console.log('118',' 我会被执行！'))


// ## Fetch 错误处理

class HttpError extends Error {
  constructor(res){
    super(`${res.status} for ${res.url}` );
    this.name = 'HttpError'
    this.res = res
  }
}

async function loadJSON(url){
  const res = await fetch(url);
  if (res.status == 200) {
    return res.json();
  }
  else {
    throw new HttpError(res);
  }
}

loadJSON('/test/data.json') // https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/proxy
.then(res => console.log('143 line', res))
.catch((error)=> console.log('144 line',error))



// ## setTimeout 里的错误 promise 不会处理
new Promise ((resolve, reject)=>{
  setTimeout(() => {
    throw new Error('Erro00')
  },1000)
}).catch(()=> console.log('这里的不会被执行！'))
