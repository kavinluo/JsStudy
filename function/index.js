
let values = [55,9,0,8]
console.log(Math.max(...values));

function dosomeThing(){
  //
}

let doAnotherthing = function(){
  // console.log(this)
}
doAnotherthing()
console.log(dosomeThing.name)//dosomeThing
console.log(doAnotherthing.name)//doAnotherthing

// 绑定产生的函数拥有原函数的名称，并总会附带"bound"前缀，因此doSomething()函数的绑定版本的名称为"bound doSomething"。

let doSomeThing = function() {

}
console.log(doSomeThing.bind().name) // bound doSomeThing

console.log(new Function().name) // anonymous

//  函数的双重用途
function Person(name) {
  this.name = name
}
let person = new Person('kevin')
// person.size = '55'
let notPerson = Person('sansay')
console.log(person) // [Object Object]
console.log('notPerson',notPerson); // undefinde


function isNew(name) {
  if(this instanceof isNew){
    this.name = name
  } else throw new Error('you must use new with isNew')
}
let yesNew = new isNew('kevina')

console.log(yesNew)
