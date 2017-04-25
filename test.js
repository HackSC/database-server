var Q = require('q');
var request = require('request');

var responseURL = "https://ce6ddcaf.ngrok.io/add"

var message = {
      "Name": "HackSC",
      "Applicant": {
        "email": "sangwoon@usc.edu",
        "name": "Ben Lee",
        "type": "Mentor"
      }
    };

var postOptions = {
    uri: responseURL,
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        body: JSON.stringify(message)
    }
    
};

request(postOptions, (error, response, body) => {
    if (error){
        // handle errors as you see fit
    }

    
    console.log("body: ", body);
});