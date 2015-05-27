var request = require('request');

var cUser = "971a887f-e7fb-4446-8c88-42735c35ea44-bluemix";
var cPass = "290f09ee5a20d19464e5443f4cb4bd5846e4e2fe0cf682f4a5914ed0a9b1721c";
var dbTest = "smartconnect";

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

options = {
      host: 'sct.gpacsys.net',
      path: '/query.php?username=dford&password=dford123&logtype='+loadType+'&format=$2&start_year='+year+'&start_month='+start_month+'&start_day='+start_day+'&start_hour=00&start_min=00&start_sec=00&end_year='+year+'&end_month='+end_month+'&end_day='+end_day+'&end_hour=23&end_min=59&end_sec=59'
    };

http.request(options, callbackLoad).end();

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