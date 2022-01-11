// const amount =100;
// if(amount <= 100){
//  console.log('small number')
// }
// else {
//  console.log('large number')
// }
// const num1 =100;
// const num2 = 100;
// function addValues(){
//     console.log(`Sum two value: ${num1 + num2}`)
// }
// addValues();
// const http = require('http')
// const server = http.createServer((req,res)=>{
//   console.log(req);
//   if(req.url ==='/'){
 
//     res.end('welcome to Node')
//     }
// if(req.url ==='/about'){
     
//    res.end('Here is testing ')
// }
// res.end(`
//     <h2>Oops</h2>
//     <h3>we can't sem to find to page</h3>
//     <a herf='/'>back</a>
// `)
// })

// server.listen(5400)
// lodash
const _ = require('lodash')
const items = [[1,[2,[3,[4]]]]]
const newItems= _.flatMapDeep(items)
console.log(newItems)