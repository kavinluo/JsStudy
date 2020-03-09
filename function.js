//创建一个函数并让他返回一个数值、一个字符串、一个数组或者一个布尔值；

function funs(num1,num2){
  var total = num1 * num2;
  return total;
}
console.log(funs(20,30))//600

// 这是一个测试 的文字，命令测试文字 

////下面这个函数只有一个参数（一个华氏温度值），他将返回一个数值（同一温度的摄氏温度值）

function convert(temp){
  var result  = temp - 32;
  result = result / 1.8;
  return result;
}
var temp_fahrenheit = 95;
var temp_celsius = convert(temp_fahrenheit);
console.log(temp_celsius)// 35; 这个值由convert返回，因为temp_fahrenheit赋予的值是95，result = 95 -32;result = 63/1.8;所以最后的结果是35
