# database-server
backend database server for post and get api calls 

--------------------------------------------
==============Post request==================

Adding applicant:

Post request to "<url>/add" with this header:

headers: {
    'content-type': 'application/json',
    body: JSON.stringify(jsonObject)
 }

Inside header for post request call, include
content-type as 'application/json' and in body,
pass a json object like this: 

{
	"Name": "HackSC", //hackathon name
	"Applicant": { 
		"email": "sangwoon@usc.edu", //student email
		"name": "Ben Lee", //student full anme
		"type": "Mentor" //student type 
	}
}

Above is the example for HackSC case. 