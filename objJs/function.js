function foo({x, y=5}) {
    console.log(x, y);
}
foo({
    x: 9
})

function fetch(url, {body='', method='GET', headers={}}={}) {
    console.log(method, headers);
}

fetch('http://example.com', {
    method: 'post',
    headers: 'headers'
})

function m1({x=0, y=0}={}) {
    return [x, y];
}
//console.log(m1())

function m2({x, y}={
    x: 0,
    y: 0
}) {
    return [x, y]
}
//console.log(m2())

var x = 1;

function f(x, y=x) {
    console.log(y);
    console.log(x)
}

f()
// 2

var x = 1;
// function foo(x, y = function() { x = 2; }) {
//   var x = 3;
//   y();
//   console.log(x);
// }

// foo() // 3
// 1
console.log(x)

function throwIfMissing() {
    throw new Error('Missing parameter')
}

function foo(mustBeProvided=throwIfMissing()) {
    return mustBeProvided
}

foo('dd')
///33

let add = (...values)=>{
    let sum = 0;
    for (let val of values) {
        sum += val
    }
    return sum
}
//console.log( add(6,8) + add(7))
add(55, 7)

/* 
就这样我的一天有即将结束
我还是没有学的什么东西，我在上周的时候就钙素了自己要抓紧时间学习准备下次的考试和面试
可是就这样一周结束了
而我还是一周之前的样子
这是最可怕的状态
我一直找不到解决的办法
*/
