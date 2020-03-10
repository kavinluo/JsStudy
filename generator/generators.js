//import fetch from 'node-fetch'

let fetch = require('node-fetch')
console.log(fetch)


let result = fetch('https://api.github.com/users/github')
result.then(res=>{
  console.log(res)
})