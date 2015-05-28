//var pouchdb = require('pouchdb');
var http = require('http');
var request = require('request');
var fs = require('fs');
//var cradle = require('cradle');


//var cUser = "971a887f-e7fb-4446-8c88-42735c35ea44-bluemix";
//var cPass = "290f09ee5a20d19464e5443f4cb4bd5846e4e2fe0cf682f4a5914ed0a9b1721c";
// var cUser = 'bsp';
// var cPass = 'demoPass';
var cUser = 'e7a08a8a-a7a3-4bc0-94a5-ba012e29dbf2-bluemix'
var cPass = 'f6973f1c4ae49c4d69738219a883e9de82c07e7338ea7b8092ea6b814e6a5cc5'
var dbTest = "jsonload";
var fileName = 'insignia_14.json';
var connExists = false;
var dbExists = false;
var logtypes = ['DATA','ALARM','COMMS','SYSTEM'];
var loadType = 'DATA';
var lIndex = 0;
var year = 2015;
var yIndex = 0;
var start_month = 4;
var start_day = 1;
var end_month = 4;
var end_day = 31;
var docCounter = 0;
var realRun = true;
var iOptions = 0;

// establish an authenticated connection
var absolute_url = "https://"
              +cUser
              +":"
              +cPass
              +"@"
              +cUser
              +".cloudant.com";

var db_url = [absolute_url, dbTest].join('/');

request.get(absolute_url, function(err, res, body){
  if(err){
    console.log("An error happened: ", err);
  }else{
    console.log("These are some details about our account: ", body);
    connExists = true;
  }
});

var str = '';
var jsonStr = '';
var jsonArr = [];

fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) throw err;

// Parse/check its valid json.

    var dump = JSON.parse(data);
    var jsonDoc = {"docs": "[]"};
    jsonDoc.docs = dump;

    console.log(jsonDoc);

      if (realRun) {
        request.post({
          url: db_url+"/_bulk_docs",
          json: jsonDoc
        }, function(err, res, body){
          if(err){
            console.log("An error happened: ", err);
          }else{
            console.log("\nYou just made a document: ", body);
            //console.log(jsonStr);
            // set iOptions to next item
              iOptions++;
              console.log(iOptions);

            // any more items in array? continue loop
              // if(iOptions < logtypes.length-1) {
              //   loopArray(logtypes);
              //   console.log(logtypes[iOptions]);   
              // }
        }
      });
      }

    });


if (realRun) {
  // // create a database
    request.put(db_url, function(err, res, body){
      if(err){
        console.log("An error happened: ", err);
        
      }else{
        console.log("You just made a database: ", body);
        var jsonBody = JSON.parse(body);
        if (jsonBody.error == "file_exists") {
          dbExists = true;
            console.log('looping');
        } else {
            console.log('looping');
          
          
        }
      }
    });
}

