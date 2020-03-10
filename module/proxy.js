// # proxy 和 Reflect

// - target 是要包装的对象，可以是任何东西， 包含函数
// - handler  代理配置：带有陷阱的对象，比如get陷阱用于读取target属性，set 陷阱写入target属性等等

let proxy  = new Proxy(target = {}, handler = {})

console.log(proxy) // {}


proxy.test = 5 
console.log(target.test) // 5,test属性出现在了 target上
console.log(proxy) // 
console.log(proxy.test) // 5  也可以从proxy对象读取他

for (let key in proxy ){
  console.log(key) // test
}

// 写入操作 proxy.test = 会将值写入 target
// 读取操作 proxy.test 会从target 返回对应的值
// 迭代proxy会从 target 返回对应的值


