const http = require('http');
http.createServer(function(req,res){
    res.write("Hello i am gourav..this is from node js server");
    res.end();
}).listen(5000);