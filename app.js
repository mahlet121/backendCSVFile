
var fs = require('./filesys');
var http = require('http');
var fs =require('fs');
const data = [];
http.createServer(function(req,res){
  
        // fs.readFile('./insurance.csv', function(err,data){
            const csvFilePath='./insurance.csv'
    const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //console.log(jsonObj);
    data.push(jsonObj);
    
    
})
console.log("localhost:5000running");
    // res.writeHead(200,{'content-type':'text/html'})
    // res.write(data);
res.end();  
// // Async / await usage
// const jsonArray=await csv().fromFile(csvFilePath);
             
        
    }).listen(8080);

   