var request = require('request');
var Q = require('q');
var Client = require('node-rest-client').Client;
var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


//Firebase
var admin = require('firebase-admin');
var serviceAccount = require("./secret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackathons-bee81.firebaseio.com/"
});

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("Hackathnons");

var check = Q.defer();

var storage = null;

ref.on("value", function(snapshot) {

  //console.log("data: ", snapshot.val() );
  
  storage = snapshot.val();
  check.resolve(true);

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function addApplicant(applicant , hackName){
  hackPath = "Hackathnons/" + hackName + "/Applicants";
  hackRef = db.ref(hackPath);

  appEmail = applicant["email"];
  appName = applicant["name"];
  appType = applicant["type"];

  //console.log("email: ", appEmail);

  appObj = {
    name: appName,
    email: appEmail,
    type: appType
    
  };


  hackRef.push().set(appObj);

}

/*
ref.set({
  'HackSC':{
    'Applicants': {
      'sangwoon@usc edu': {
        name: "Ben Lee",
        type: "Mentor"
      },
      'punhani@usc edu':{
        name: "Sagar Punhani",
        type: "Hacker"
      }
    }
  }
});
*/

//server init
var app = express();

//listening for create request
app.post('/create', urlencodedParser, (req, res) =>{
    //res.status(200).end(); // best practice to respond with empty 200 status code
    
    var reqBody = req.body;
    
    
    console.log("body: ", req.headers.body);
    res.send("hi").end();
});

//listening for add request 
app.post('/add', urlencodedParser, (req, res) =>{
    res.status(200).end(); // best practice to respond with empty 200 status code

    data = JSON.parse(req.headers.body);
    hackName = data["Name"];
    applicant = data["Applicant"];

    addApplicant(applicant, hackName);
    res.status(200).end();
});

app.listen(process.env.PORT || 8080);


