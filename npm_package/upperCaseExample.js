const http=require('http');
const uc=require('upper-case');
const data="Good Morning friends, this is an example of npm package.json file"
http.createServer(function(req,res){
    res.write(uc.upperCase("Helloo, I am gourav from khandwa \n"));
    res.write(uc.upperCase(data));
    res.end();
}).listen(4500);