
//声明前导出
//导出数组
export let months = ['Jan','Feb','Mar','Apr','Aug','Sep','Oct','Nov','Dec']

// 导出const 声明的变量
export const MOD = 555

// 导出类
export class User {
  constructor(name){
    this.name = name
  }
}
// 导出函数
export function sayHi(tall){
  return `Hello ${tall}`
}



// 单独的导出 先声明函数在一起导出

// function hi(){
//   return 'hello how are you'
// }

// function sayBye(user){
//   return `Bye, ${user} !`
// }


// export { hi, sayBye };
