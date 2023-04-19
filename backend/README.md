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
curl -XPOST http://localhost:3000/api/examiner/signup -H "Content-Type: application/json"  -d '{"firstname": "Layi", "lastname": "Chidi", "email": "chidi@gmail.com", "password": "chidi001"}'; echo ''

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
curl -XPOST http://localhost:3000/api/examiner/signup -H "Content-Type: application/json"  -d '{"firstname": "wale", "lastname": "ade", "email":"chidi@gmail.com", "password":"chidi001"}';
  
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
 curl -XPOST http://localhost:3000/api/examiner/signin -H "Content-Type: application/json"  -d '{"email": "chidi@gmail.com", "password": "chidi001"}' -v; echo ''
 
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
< Authorization: 73e295b3-cfeb-486f-ad0d-28eaa68b0161         the token header
< Content-Type: application/json; charset=utf-8
< Content-Length: 48
< ETag: W/"30-UHZ/2UjEJOdjbKzdsslhn2laROQ"
< Date: Wed, 19 Apr 2023 17:24:20 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact

{"token":"73e295b3-cfeb-486f-ad0d-28eaa68b0161"}         token return as json
```








