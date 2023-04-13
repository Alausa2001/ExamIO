import requests

header = {"Authorization": "0d9aed00-251f-4d64-b065-5ac025408f8f", "Content-Type": "application/json" }

#data = {"course": "bio", 'questions': [{'question': 'say my name', 'options': [{ 'a': 'feranmi', 'b': 'bola'}], 'correct': 'a']}
data = {"course": "bio", "questions": [{'question1': 'say my name', 'options': [{'a': 'feranmi', 'b': 'bola'}]}]}

res = requests.post('http://localhost:3000/examiner/create-exam', headers=header, json=data)
print(res.json())
