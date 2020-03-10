// # Promise API

// 在Promise 类中 有5种静态方法

// - Promise.resolve 
let value = 'value'
 let promise = Promise.resolve(value) // 根据制定的 value返回 resolveed promise
 // 等于 
 let promise1 = new Promise( resolve => resolve(value) )

 console.log(promise)
 console.log(promise1)

 function loadCached( url ){
  let cache = loadCached.cache || ( loadCached.cache = new Map())
  if(cache.has(url)){
    return Promise.resolve(cache.get(url))
  }
  return fetch(url)
    .then(res => res.json())
    .then( data =>{
      cache.set(url, data)
      console.log(data)
      return data
    } )
 }
 loadCached('https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/query')


 // - Promise.reject
 let error = new Error('error')
 let promiseRej = Promise.reject( error )

 let promiseR = new Promise((resolve, reject) => reject( error))

 console.log(promiseRej.catch( error => console.log( error)))
 console.log(promiseR.catch( error => console.log( error)))




 // ## Promise.all
 // 假设想要并行执行多个 promise 并等等所有的 promise 准备就绪

 let promiseAll = Promise.all(['promise1','promise2','...']) // 他需要一个 promise数组做其参数 并返回一个新的promise

 Promise.all([
   new Promise(resolve => setTimeout(() => resolve(3),3000)),
   new Promise(resolve => setTimeout(()=> resolve(2),2000)),
   new Promise(resolve => setTimeout(()=> resolve(1),1000))
 ]).then(res => console.log(res)) // [3,2,1]




 let urls = [
  'https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/query',
  'https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/proxy',
  'https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/mock'
];

// 将每个 url 映射到 fetch 的 promise 中
let requests = urls.map(url => fetch(url));
// Promise.all 等待所有作业都被 resolve
Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));
  
  // 如果出现错误，其他 promise 就会被忽略
  //如果其中一个 promise 被 reject，Promise.all 就会立即被 reject 并忽略所有列表中其他的 promise。
  //它们的结果也被忽略。
  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch((error)=>console.log(error)); // Error: Whoops!


  // ## Promise.allSettled

  // Promise.allSettled 等待所有的promise都被处理，即使其中一个reject，它仍然会等待其他的promise，
  // - {status: 'flfilled', value: result} // 对于成功的响应处理
  // - {status: 'rejected', reason: error} // 对于错误❎的响应处理


  let urlsError = [
    'https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/query',
    'https://easy-mock.com/mock/5baf2af5d71a4e533bffd032/example/proxy',
    '/5baf2af5d71a4e533bffd032/example/mock'
  ];

  Promise.allSettled(urlsError.map(url => fetch( url )))
  .then(res =>{
    res.forEach((res, num)=>{
      if(res.status ==='fulfilled'){
        console.log(`${urlsError[num]}: ${res.status.value}`)
      }
      if( res.status === 'rejected'){
        console.log(`${urlsError[num]}:${res.reason}`)
      }
    })
  })




// ## Promise.race

// 与 promise.all类似，接受一个可迭代的promise集合，但他只等待第一个完成或者 error 而不会等待所有的都完成然后继续执行

let promiseRace = Promise.race(iterable)
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then((r)=> console.log(r)); // 1

// 第一个结果/错误会成为整个Promise.race 的结果。在第一个Promise被解决（‘赢得比赛[wins the race]’)后。所有后面的结果/错误都会被忽略

// ## 总结
//Promise 类有 5 种静态方法：
// Promise.resolve(value) – 根据给定值返回 resolved promise。
// Promise.reject(error) – 根据给定错误返回 rejected promise。
// Promise.all(promises) – 等待所有的 promise 为 resolve 时返回存放它们结果的数组。如果任意给定的 promise 为 reject，那么它就会变成 Promise.all 的错误结果，所有的其他结果都会被忽略。
// Promise.allSettled(promises) （新方法） – 等待所有 promise resolve 或者 reject，并以对象形式返回它们结果数组：
// state：‘fulfilled’ 或 ‘rejected’
// value（如果 fulfilled）或 reason（如果 rejected）
// Promise.race(promises) – 等待第一个 promise 被解决，其结果/错误即为结果。
// 这五个方法中，Promise.all 在实战中使用的最多。