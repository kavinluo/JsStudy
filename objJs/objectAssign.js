
//自有属性枚举顺序具本规则
// 1、所有数字键按升序排
// 2、所有字符串键按照它们被加入对象的顺序排列
// 3、所有symbol键按照它们被加入对象的顺序排列
let obj = {
  a: 1,
  0: 1,
  c: 1,
  2: 1,
  b: 1,
  1: 1
}
obj.d = 1;


console.log(Object.getOwnPropertyNames(obj).join(''))  // 012acdb