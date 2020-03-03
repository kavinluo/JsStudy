
//getAttribute 总结 getAttribute 是获取属性值	
	```html
  <p title="titles"></p>
	<p title="titles"></p>
	<p title="titles"></p>
	<p title="titles"></p>
	<p title="titles"></p>
	<p title="titles"></p>
```

 遍历所有P元素的title属性；
```js
var pAttribute = document.getElementsByTagName("p");
	for (var i = 0; i < pAttribute.length; i++) {
		console.log(pAttribute[i].getAttribute("title"))// 6 title
    }
``` 
 
 
 //下面包含空属性
 ```html
 	<p title="titles"></p>
	<p title="titles"></p>
	<p title="titles"></p>
	<p title="titles"></p>
	<p></p>
  <p title=""></p>
  ```

 //对如果出现空属性的节点做判断
 	```js
   var pAttribute = document.getElementsByTagName("p");
	for (var i = 0; i < pAttribute.length; i++) {
	var ifnull = pAttribute[i].getAttribute("title");	
	if (ifnull!=null) {
		console.log(pAttribute[i].getAttribute("title"))
		}
```


//setAttribute  是修改属性值

//HTML
```htm 
<a href="" id="links" title="this is title value">hih</a>
```
//js
```js
obj.setAttribute(attribut, value)
var links = document.getElementById("links");
links.setAttribute("title","这是a的title修改后的属性值");
```

