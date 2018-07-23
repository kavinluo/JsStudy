/*
*两个或者两个函数以上相互嵌套，把里面的函数保存到外面的函数的外头（把里面的函数保存到外头）；
*/
function add(){
			 count = 0;
			function deom(){
				count ++;
				console.log(count);
			}
			return deom;
		}
    
    var counter = add();
		console.log(counter);// 输出的是 fn.deom(){} 函数体
		counter();// 1  调用一次+1
		counter();//2   累加+1
		counter();//3   累加+1
    
    
    
    
function test(){
			var arr = [];
			for (var i = 0; i < 10; i++) {
				arr[i] = function(){
					console.log(i);
				}
			}
			return arr;
		}

 var myarr = test();
 
    myarr[0]();// 输出的是函数体  fn(){console.log(i);}
    myarr[1](); //输出 10 ;
     myarr[2]();//同样输出 10

		 for (var j = 0; j < 10; j++) {
		 	myarr[j] // 10 个 10
		 }
		 
		 
// 通过立即执行函数解决 应该是 按顺序 输出的10个数

	function test(){
			var  arr = [];
			for (var i = 0; i < 10; i++) {
				(function(j){
					arr[j] = function(){
					console.log(j + " ");
				}
			}(i));
				
			}
			return arr;
		}

		var myarr = test();
		console.log(myarr);
		for (var j = 0; j < 10; j ++) {
			console.log(myarr[j]());
		}



