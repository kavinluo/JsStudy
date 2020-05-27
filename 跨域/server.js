const http = require('http');
http.createServer((req,res)=>{
  if(req.url ==='api'){
    let posts = ['js', 'php'];
        res.end(`onRes(${JSON.stringify(posts)})`);
  }
})

.listen(9099,() => {
  console.log(9099)
})