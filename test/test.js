// var http = require('http');
// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':'text/html'});
//   res.end('testing');
// }).listen(8908);
// const path = require('path');
// var pathobj = path.parse(__filename);
// console.log(pathobj);
// var os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(totalMemory,freeMemory);
// const fs  = require('fs');
// const files= fs.readdirSync('./');
// console.log(files);

// const { Socket } = require("dgram");

// const http = require('http');
// const server = http.createServer();
// server.on('connection',(_socket)=>{
//   console.log('New Connection...');
// });
// server.listen(8097);
// const name = "pisey";
// console.log(name);
const amount =10;
if(amount <10) {
  console.log('small number')
}
else {
  console.log('large number')
}