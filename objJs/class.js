class PowerArray extends Array {
  isEmpty(){
    return this.length.length === 0
  }
}

let arr = new PowerArray(1,3,5)
console.log(arr.isEmpty())

let filter = arr.filter(item =>{
    return item >= 2
})

console.log(filter)

console.log(arr.constructor === PowerArray) // true