# API DOCUMENTATION
Documetation of the API for a computer-based-test application

#### Base URL 
http://api.examio.feranmi.tech/api

#### NOTE
Client-Server data transfer should be via the standard JSON format

## ROUTES
The routes are divided into two parts; the students' and the examiners' routes

### Examiner routes

POST method:  /examiner/signup \n
parameters: firstname, lastname, email, password

```
Request
curl -XPOST http://localhost:3000/api/examiner/signup -H "Content-Type: application/json"  -d '{"firstname": "Layi", "lastname": "Chidi", "email": "chidi@gmail.com", "password": "chidi001"}'; echo ''

Response
{"examinerId":"d3fdff45-4123-4ac3-82d4-2ffc5aa0fe49","firstName":"Layi","lastName":"Chidi","email":"chidi@gmail.com","updatedAt":"2023-04-19T15:02:14.614Z","createdAt":"2023-04-19T15:02:14.614Z"}
```

