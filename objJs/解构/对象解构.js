let node = {
  type: 'objType',
  name: 'objName'
}
// let { type, name } = node

// console.log(type)
// console.log(name)


function outputInfo(value){
  console.log(value === node) // true
}


//outputInfo({type, name} = node)
//console.log(type) // objType
//console.log(name) // objName

// 为非同名局部变量赋值

// type: localType 读取名为type的属性并将其值储存到locaType中
 let { type: localType, name: localName} = node
 console.log(localName) //objName  
 console.log(localType) //objType

let obj = {
  type: 'objType'
}
// name: locaObjName = 'bar' 添加默认值
let { type: localObjType, name: locaObjName = 'bar'} = obj //

console.log(localObjType)
console.log(locaObjName)


// 嵌套对象到的解构

let objNode = {
  type:'identifier',
  name: 'foo',
  loc:{
    start: {
      line: 1,
      column: 1
    },
    end: {
      line:1,
      column: 4
    }
  }
}

let { loc:{start}} = objNode

console.log(start.column) //1

let {loc: {start: insider}} = objNode

console.log(insider.column) // 1
