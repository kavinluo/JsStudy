//必须有两个形参
//看返回值
   // 当返回值为负数的时候，那么前面的数放在前面，
   // 为正数，那么后面的数在前面，
   // 为0， 不动

var arr = [10,2,30,5,49];
arr.sort(function (a,b){
  return a- b ; // 升序
  return b - a; //降序
})

// 数组去重
var arr =[11,1,1,222,33,5,5,5,6,7];
		Array.prototype.unique = function(){
			var temp = {},
				arr = [],
				len = this.length;
				for (var i = 0; i < len; i++) {
					if (!temp[this[i]]) {
						temp[this[i]] = "abc";
						arr.push(this[i])
					}
				}
				return arr;
		}



// 数组类型判断
		function type(target){
			var ret = typeof(target);
			var template = {
				"[object Array]" : "array",
				"[object Object]" : "object",
				"[object Number]" : "number - object",
				"[object Boolean]" : "boolean - object",
				"[object String]" : "string - object"
			}
			if (target === null) {
				return "null"
			} else if (ret == "object") {
				var str = Object.prototype.toString.call(target);
				return  template[str];
			}else {
				return ret;
			}

		}


    // ## sort 
    let user = [
      {name: 'John', age: 20, surnane: 'Jonnson'},
      {name: 'Pete', age: 22, surnane: 'Peterson'},
      {name: 'Ann', age: 19, surnane: 'Annson'},
      {name: 'kevin', age: 21, surnane: 'Kevinson'}
    ]

    function byField(field) {
      return (a, b) => a[field] > b[field] ? 1 : -1
    }

    user.sort(byField('name'))
    //user.forEach(item => console.log(item))
    user.sort(byField('age'))
    user.forEach(item => console.log(item))