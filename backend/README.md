# API DOCUMENTATION
Documetation of the API for a computer-based-test application

#### Base URL 
http://api.examio.feranmi.tech/api

#### NOTE
Client-Server data transfer should be via the standard JSON format

## ROUTES
The routes are divided into two parts; the students' and the examiners' routes

### Examiner routes

#### POST method:  /examiner/signup

parameters: firstname, lastname, email, password

```
Request
curl -XPOST http://api.examio.feranmi.tech/api/examiner/signup -H "Content-Type: application/json"  -d '{"firstname": "Layi", "lastname": "Chidi", "email": "chidi@gmail.com", "password": "chidi001"}'; echo ''

Response
{"examinerId":"d3fdff45-4123-4ac3-82d4-2ffc5aa0fe49","firstName":"Layi","lastName":"Chidi","email":"chidi@gmail.com","updatedAt":"2023-04-19T15:02:14.614Z","createdAt":"2023-04-19T15:02:14.614Z"}
```

if any parameter is missing in the request body, an error message with status 400 is returned
  
```
Request
curl -XPOST http://localhost:3000/api/examiner/signup -H "Content-Type: application/json"  -d '{"firstname": "Layi", "lastname": "Chidi", "email": "chidi1@gmail.com"}'; echo ''

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

parameters: email and password

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
PARAMETERS: The exam questions are sent as a list of objects 
(see format [here](https://github.com/Alausa2001/ExamIO/blob/Alausa2001-patch-1/backend/api/pythonscripts/createexam.py))

REQUEST HEADERS: {'Authorization': token, Content-Type: 'application/json}

The token is gotten upon sign-in
```
a_oluwaferanmi@Young-Sahaba:~/ExamIO/backend/api/pythonscripts$ cat ./createexam.py

def createexam(token):

    header = {"Authorization": token, "Content-Type": "application/json" }

    #data = {"course": "bio", 'questions': [{'question': 'say my name', 'options': [{ 'a': 'feranmi', 'b': 'bola'}], 'correct': 'a']}
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
curl -XPOST http://api.examio.feranmi.tech/api/examiner/history -H {"Authorization": token, "Content-Type": "application/json" }

Response
{'records': [{'examId': '750d2716-1e58-40fc-b8ed-e3d68ab59150', 'course': 'chemistry', 'createdAt': '2023-04-17T12:19:36.000Z'}, {'examId': 'a6a79775-c6d2-47c6-8369-d9e35229a81f', 'course': 'chemistry', 'createdAt': '2023-04-17T12:20:08.000Z'}, {'examId': 'c77a0c5b-8b1a-4d3d-ac64-d5af8ef93939', 'course': 'chemistry', 'createdAt': '2023-04-19T20:09:48.000Z'}, {'examId': '45124b08-1441-4551-a65f-742386509458', 'course': 'chemistry', 'createdAt': '2023-04-19T20:10:33.000Z'}]}
```
















