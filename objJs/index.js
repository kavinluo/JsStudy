/**
 * @param  {} name
 * @param  {} teacher
 */
function Lecture ( name,teacher){
  this.name = name
  this.teacher = teacher
}

Lecture.prototype.display = function(){
  return this.teacher + "is teaching" + this.name
}
/**
 * @param  {} lectures
 */
function Schedule (lectures) {
  this.lectures = lectures
}

Schedule.prototype.display = function (){
  let str = "";
  for(let i = 0;i < this.lectures.length; i++){
    str += this.lectures[i].display() + ' ';
  }
  return str 
}


// 函数申明

console.log(fun(2,5))

function fun (a,b){
  return a + b
}

// 函数表达式
//console.log(ask(4,6))
let ask = function(a, b){
  return a + b
}
console.log(ask(3,6))