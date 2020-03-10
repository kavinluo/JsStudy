let promise = Promise.reject(new Error("Promise Failed!"));
promise.catch(err => console.log('caught',err));

// 不会运行：错误已被处理
//window.addEventListener('unhandledrejection', event => console.loh(event.reason));

let promiseS = Promise.reject(new Error('this is erroe'))
window.addEventListener('unhandledrejection', event => console.log(event.reason))