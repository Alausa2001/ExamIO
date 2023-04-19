# API DOCUMENTATION
Documetation of the API for a computer-based-test application

#### Base URL 
http://api.examio.feranmi.tech/api

#### NOTE
1. Client-Server data transfer (parameters as used in this documentation) should be via the standard JSON format
2. For routes that require the Authorization header, if the token is incorrect or has expired, a 401 unauthorized error response is received. 


## ROUTES
The routes are divided into two parts; the students' and the examiners' routes

### Examiner routes

#### POST method:  /examiner/signup

Parameters: firstname, lastname, email, password

```
Request
curl -XPOST http://api.examio.feranmi.tech/api/examiner/signup -H "Content-Type: application/json"  -d '{"firstname": "Layi", "lastname": "Chidi", "email": "chidi@gmail.com", "password": "chidi001"}'; echo ''

Response
{"examinerId":"d3fdff45-4123-4ac3-82d4-2ffc5aa0fe49","firstName":"Layi","lastName":"Chidi","email":"chidi@gmail.com","updatedAt":"2023-04-19T15:02:14.614Z","createdAt":"2023-04-19T15:02:14.614Z"}
```

if any parameter is missing in the request body, an error message with status 400 is returned
  
```
Request
curl -XPOST http://api.examio.feranmi.tech/api/examiner/signup -H "Content-Type: application/json"  -d '{"firstname": "Layi", "lastname": "Chidi", "email": "chidi1@gmail.com"}'; echo ''

Response
{"error":"password missing"}
```
If the email is already used, an error message with status 400 is returned
 
 ```
Request
curl -XPOST http://api.examio.feranmi.tech/api/examiner/signup -H "Content-Type: application/json"  -d '{"firstname": "wale", "lastname": "ade", "email":"chidi@gmail.com", "password":"chidi001"}';
  
Response
{"error":"user exists"}
```

#### POST method: /examiner/signin

Parameters: email and password

An authorization header is returned in the response header. The token in this header is used as
a means of authorization for other routes. Aside being in the header, this token is also return as
a json response

```
Request
 curl -XPOST http://api.examio.feranmi.tech/api/examiner/signin -H "Content-Type: application/json"  -d '{"email": "chidi@gmail.com", "password": "chidi001"}' -v; echo ''
 
 Response
 *   Trying 127.0.0.1:3000...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3000 (#0)
> POST /api/examiner/signin HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.68.0
> Accept: */*
> Content-Type: application/json
> Content-Length: 52
>
* upload completely sent off: 52 out of 52 bytes
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Authorization: 73e295b3-cfeb-486f-ad0d-28eaa68b0161         token returned in authorization header
< Content-Type: application/json; charset=utf-8
< Content-Length: 48
< ETag: W/"30-UHZ/2UjEJOdjbKzdsslhn2laROQ"
< Date: Wed, 19 Apr 2023 17:24:20 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact

{"token":"73e295b3-cfeb-486f-ad0d-28eaa68b0161"}              token returned as json
```

#### POST method: /examiner/create-exam
Parameters: The exam questions are sent as a list of objects 
(see format [here](https://github.com/Alausa2001/ExamIO/blob/Alausa2001-patch-1/backend/api/pythonscripts/createexam.py))

Request Headers: {'Authorization': token, Content-Type: 'application/json}

The token is gotten upon sign-in
```
a_oluwaferanmi@Young-Sahaba:~/ExamIO/backend/api/pythonscripts$ cat ./createexam.py

import requests
def createexam(token):

    header = {"Authorization": token, "Content-Type": "application/json" }
    question = [
        {
            'course': 'chemistry',
            'question': 'Which element has the symbol "O"?',
            'options': [{'text': 'Oxygen', 'correct': True}, {'text': 'Osmium', 'correct': False}, {'text': 'Oganesson', 'correct': False}]
        },
        {
            'course': 'chemistry',
            'question': 'What is the chemical symbol for gold?',
            'options': [{'text': 'Au', 'correct': True}, {'text': 'Ag', 'correct': False}, {'text': 'Cu', 'correct': False}]
        }]
        data = {"course": "bio", "questions": question}
        res = requests.post('http://api.examio.feranmi.tech/api/examiner/create-exam', headers=header, json=data)
        print(res.json())

if __name__ == "__main__":
    createexam(token)

a_oluwaferanmi@Young-Sahaba:~/ExamIO/backend/api/pythonscripts$ ./createexam.py
{'examId': '4b4b7225-1f9b-405f-84a5-3dae670fd0a6'}

This is the examId of the examination created
```

#### GET method: /examiner/history

Returns all the examId of exams created by an examiner

Parameters: None

Request Headers: {"Authorization": token, "Content-Type": "application/json" }

```
Request
curl -XGET http://api.examio.feranmi.tech/api/examiner/history -H {"Authorization": token, "Content-Type": "application/json" }

Response
{'records': [{'examId': '750d2716-1e58-40fc-b8ed-e3d68ab59150', 'course': 'chemistry', 'createdAt': '2023-04-17T12:19:36.000Z'}, {'examId': 'a6a79775-c6d2-47c6-8369-d9e35229a81f', 'course': 'chemistry', 'createdAt': '2023-04-17T12:20:08.000Z'}, {'examId': 'c77a0c5b-8b1a-4d3d-ac64-d5af8ef93939', 'course': 'chemistry', 'createdAt': '2023-04-19T20:09:48.000Z'}, {'examId': '45124b08-1441-4551-a65f-742386509458', 'course': 'chemistry', 'createdAt': '2023-04-19T20:10:33.000Z'}]}
```

#### GET method: /examiner/history/:examId

Returns all the questions of a particular exam

Paramaters: None

Request Header: {"Authorization": token, "Content-Type": "application/json" }

```
Request
curl -XGET http://api.examio.feranmi.tech/api/examiner/get-questions/750d2716-1e58-40fc-b8ed-e3d68ab59150 -H {"Authorization": token, "Content-Type": "application/json"}

Response
{'questions': [{'_id': '643d3958fc2e9308622b73df', 'course': 'chemistry', 'question': 'Which element has the symbol "O"?', 'options': [{'text': 'Oxygen', 'correct': True}, {'text': 'Osmium', 'correct': False}, {'text': 'Oganesson', 'correct': False}], 'examId': '750d2716-1e58-40fc-b8ed-e3d68ab59150'}, {'_id': '643d3958fc2e9308622b73e0', 'course': 'chemistry', 'question': 'What is the chemical symbol for gold?', 'options': [{'text': 'Au', 'correct': True}, {'text': 'Ag', 'correct': False}, {'text': 'Cu', 'correct': False}], 'examId': '750d2716-1e58-40fc-b8ed-e3d68ab59150'}]}
```


## Student Routes

#### POST method: /student/signup

Parameters: firstname, lastname, email, password

Request Headers: "Content-Type: application/json"

```
Request
curl -XPOST http://api.examio.feranmi.tech/api/student/signup -H "Content-Type: application/json"  -d '{"firstname": "Adewale", "lastname": "Adeniyi", "email": "Adeniyi@gmail.com", "password": "Adeniyi001"}'; echo ''

Response
{"studentId":"6fdabf59-4563-4995-b2fa-2c93f2d0c41d","firstName":"Adewale","lastName":"Adeniyi","email":"Adeniyi@gmail.com","updatedAt":"2023-04-19T21:33:29.246Z","createdAt":"2023-04-19T21:33:29.246Z"}
```

if any parameter is missing in the request body, an error message with status 400 is returned
  
```
Request
curl -XPOST http://api.examio.feranmi.tech/api/student/signup -H "Content-Type: application/json"  -d '{"firstname": "Adewale", "lastname": "Adeniyi", "email": "Adeniyi@gmail.com"}'; echo ''

Response
{"error":"password missing"}
```
If the email is already used, an error message with status 400 is returned
 
 ```
Request
curl -XPOST http://api.examio.feranmi.tech/api/student/signup -H "Content-Type: application/json"  -d '{"firstname": "Quindon", "lastname": "Adeniyi", "email": "Adeniyi@gmail.com", "password": "Quindon001"}'; echo ''
  
Response
{"error":"user exists"}
```

#### POST method: /student/signin

Parameters: email, password

Request Headers: "Content-Type: application/json"

An authorization header is returned in the response header. The token in this header is used as
a means of authorization for other routes. Aside being in the header, this token is also return as
a json response
```
Request
 curl -XPOST http://api.examio.feranmi.tech/api/student/signin -H "Content-Type: application/json"  -d '{"firstname": "Adewale", "lastname": "Adeniyi", "email": "Adeniyi@gmail.com", "password": "Adeniyi001"}'; echo ''
 
 Response
 Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 13.50.240.138:80...
* TCP_NODELAY set
* Connected to api.examio.feranmi.tech (13.50.240.138) port 80 (#0)
> POST /api/student/signin HTTP/1.1
> Host: api.examio.feranmi.tech
> User-Agent: curl/7.68.0
> Accept: */*
> Content-Type: application/json
> Content-Length: 103
>
* upload completely sent off: 103 out of 103 bytes
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: nginx/1.18.0 (Ubuntu)
< Date: Wed, 19 Apr 2023 22:08:59 GMT
< Content-Type: application/json; charset=utf-8
< Content-Length: 48
< Connection: keep-alive
< X-Powered-By: Express
< Access-Control-Allow-Origin: *
< Authorization: d22dfa44-0c10-4df0-a579-b65e5b28f097
< ETag: W/"30-ffCSqVLKYFhlUzzHOkegZ3Jfjyc"
<
* Connection #0 to host api.examio.feranmi.tech left intact
{"token":"d22dfa44-0c10-4df0-a579-b65e5b28f097"}
```

#### GET method: /student/take-exam

Parameters: examId, page (5 questions per page)

Request Header: {"Authorization": token, "Content-Type": "application/json" }

```
Request
curl -XGET http://api.examio.feranmi.tech/api/student/take-exam -H "Authorization: d22dfa44-0c10-4df0-a579-b65e5b28f097" -H "Content-Type: application/json" -d  '{"examId": "06f3de30-bb2d-4218-8a3f-b72ad63f0505", "page": 1}'

Response
{"totalNoOfQuestions":11,"questions":[{"course":"chemistry","question":"What is the smallest unit of an element?","options":[{"text":"Atom","correct":true},{"text":"Molecule","correct":false},{"text":"Ion","correct":false}],"examId":"06f3de30-bb2d-4218-8a3f-b72ad63f0505"},{"course":"chemistry","question":"What is the atomic number of carbon?","options":[{"text":"6","correct":true},{"text":"8","correct":false},{"text":"14","correct":false}],"examId":"06f3de30-bb2d-4218-8a3f-b72ad63f0505"},{"course":"chemistry","question":"What is the name of the process by which a solid changes directly to a gas?","options":[{"text":"Sublimation","correct":true},{"text":"Evaporation","correct":false},{"text":"Condensation","correct":false}],"examId":"06f3de30-bb2d-4218-8a3f-b72ad63f0505"},{"course":"chemistry","question":"What is the chemical formula for ammonia?","options":[{"text":"NH3","correct":true},{"text":"N2","correct":false},{"text":"CO2","correct":false}],"examId":"06f3de30-bb2d-4218-8a3f-b72ad63f0505"},{"course":"chemistry","question":"What is the name of the process by which a gas changes directly to a solid?","options":[{"text":"Deposition","correct":true},{"text":"Sublimation","correct":false},{"text":"Condensation","correct":false}],"examId":"06f3de30-bb2d-4218-8a3f-b72ad63f0505"}]}
```












