var fs =require('fs');
var filesys= {
   
   readFrom:function(filename){

       fs.readFile(filename,(err,data)=>{
    if(err==undefined){

        console.log("my Data"+data)
    }
    else console.log('something wrong'+err)
   })
  
}
};
module.exports=filesys