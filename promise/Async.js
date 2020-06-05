// async 总是返回一个 promise


async function fun (){
   console.log('33',33);
   return 5
}
fun().then((res)=>{
  console.log(res)
})

async function retuns(){
  return Promise.resolve(6)
}
retuns().then((res) =>{
  console.log('res',res)
}
)


function res() {
  return 444
}
console.log(res())


async function f() {
  let tes = 'hello '
  let promise = new Promise((res, rej)=> {
    setTimeout(() => res( 'done !'), 3000)
  })

  console.log(tes)
  let result = await promise
   console.log('result',result)
}

f()