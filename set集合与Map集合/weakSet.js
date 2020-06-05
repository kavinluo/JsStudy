let set = new WeakSet()
let key = {}

set.add(key)

console.log(set)
console.log(set.has(key))

set.delete(key) // 删除

console.log(set.has(key)) // false

//使用 Weak Set 很像在使用正规的 Set 。你可以在 Weak Set 上添加、移除或检查引用，也可以给构造器传入一个可迭代对象来初始化 Weak Set 的值：第七章 Set与Map131


let key1 = {},
    key2 = {},
    sets = new WeakSet([key1, key2])

    console.log(sets.has(key1))
    console.log(sets.has(key2))

    //  Weak Set 与正规 Set 的一些共有特征和差异

  // 1. 对于 weak Set 的实例，若调用 add() 方法时传入了非对象的参数，就会抛出错误， has() 或 delete() 则会在传入的非对象的参数时返回 false；
  // 2. Weak Set 不可迭代，因此不能被用于 for-of 循环
  // 3. Weak Set 无法暴露出任何迭代器（例如keys()与values()方法），因此没有任何编程手段可用于判断 Weak Set 的内容；
  // 4. Weak Set 没有forEach()方法；
  // 5. Weak Set 没有size属性。

  