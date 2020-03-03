var obj = {
name : "abc",
age : 123,
sex : "female"
}

var obj1 = {}

function clone(origin,target){
 var target = target || {};
 for(var prop in origin){
  target[prop] = origin[prop];
 }
 return target;
}

clone(obj,ob1)
