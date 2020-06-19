var express = require('express');
var bodyParser = require('body-parser');
var fs =require('fs');

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const data = [];
const BCBSInsur =[];
const UnitedInsur =[];
const CIGNAInsur =[];
const BCBSAlpha=[];
const UnitedAlpha= [];
const CIGNAAlpha=[];

const csvFilePath='./insurance.csv'
const csv=require('csvtojson');
const { networkInterfaces, version } = require('os');
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
//console.log(jsonObj);
data.push(jsonObj);
 
for ( i in data){
  for ( j in data[i]){

    if(data[i][j].InsuranceCompany=='BCBS'){
       BCBSInsur.push(data[i][j]);
      
    }else if(data[i][j].InsuranceCompany=='United'){
      UnitedInsur.push(data[i][j]);
    }else if(data[i][j].InsuranceCompany=='CIGNA'){
      CIGNAInsur.push(data[i][j]);
    }
  }
}
const newBCBS = BCBSInsur.sort(function(a, b){
  if(a.FirstName < b.FirstName) { return -1; }
  if(a.FirstName > b.FirstName ) { return 1; }
  if(a.LastName < b.LastName) { return -1; }
  if(a.LastName > b.LastName) { return 1; }
  return 0;
})
BCBSAlpha.push(newBCBS);
const newUnited = UnitedInsur.sort(function(a, b){
  if(a.FirstName < b.FirstName) { return -1; }
  if(a.FirstName > b.FirstName ) { return 1; }
  if(a.LastName < b.LastName) { return -1; }
  if(a.LastName > b.LastName) { return 1; }
  return 0;
})
UnitedAlpha.push(newUnited);

const newCIGNA = CIGNAInsur.sort(function(a, b){
  if(a.FirstName < b.FirstName) { return -1; }
  if(a.FirstName > b.FirstName ) { return 1; }
  if(a.LastName < b.LastName) { return -1; }
  if(a.LastName > b.LastName) { return 1; }
  return 0;
})
CIGNAAlpha.push(newCIGNA);

  
})

console.log("mare fikre this is your console")

app.get('/users', function (req, res) {
  
      res.send(data)
    })

    var server = app.listen(8080)


   