const http=require('http');
const data=[
    {name:"Gourav",age:"21",email:"gourav@gmail.com"},
    {name:"Piyush",age:"20",email:"piyush@gmail.com"},
    {name:"yash",age:"15",email:"yash@gmail.com"}
]
http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'application\json'});
    // resp.write('{"name":"Gourav"}');
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4000);