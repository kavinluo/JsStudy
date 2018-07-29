 new String();
 
 var  num = 4;
 num.len = 3; 
 //过程， new Number(4).len = 3;  delete
 //在访问 new Number(4).len;
 console.log(num.len); //undefined
 
 
 var str = "abc";
 str += 1;
 var test = typeof(str);// test == "string";
 if(test.length == 6){
  test.sign ="typeof 的返回结果"
 }
 
 console.log(test.sign)//undefined
 
 
 
 
 var x = 1, y = z = 0;
 function add(n){
  return n = n + 1;
}
y = add (x);
function add(n){
  return n = n + 3;
}
z = add(x);

console.log(x) //1
console.log(y) // 4
console.log(z) //4



//ASCII码
var str = "hellow world, 今天是2018年7月29日";
for (i = 0; i < str.length;  i ++ ){
  if (str.charCodeAt(i) <= 255){
    console.log(str[i] +" " + str.charCodeAt(i) + "我是英文")
  }
  if(str.charCodeAt(i) > 255){
    console.log(str[i] + " " + str.charCodeAt(i) + "我是中文")
  }
}
