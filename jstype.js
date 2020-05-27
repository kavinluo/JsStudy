// javascript 有七种内置类型
null;
undefined;
Boolean;
Number;
String;
Object;
Symbol;

// 变量没有值 但他们持有的值有类型，类型定于了值得行为特性

// 1. 所有的对象在布尔上下文(context) 中均为true 。所以对于对象，不存在 to-boolean 转换，只有字符串和数值转换；
//2. 数值转换发生在对象相减或运用数字函数时，列如，Date 对象 可以相减， date1 - date2 的结果是两个日期之间的差值
//3. 至于字符串转换 -- 通常发生在Wimbledon想 alert(obj) 这样输出一个对象和类似的上下文中。
