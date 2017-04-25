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
	"Name": "HackSC", 
	"Applicant": { 
		"email": "sangwoon@usc.edu", 
		"name": "Ben Lee", 
		"type": "Mentor" 
	}
}

Inside above json object, Name is hackathnon name. Inside 
applicant, name is student's full name, email is student's email, 
and type is student's type e.g student/mentor. 