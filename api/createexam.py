import requests

header = {"Authorization": "6549c5ea-845d-4239-a104-0ffb6357a828", "Content-Type": "application/json" }

#data = {"course": "bio", 'questions': [{'question': 'say my name', 'options': [{ 'a': 'feranmi', 'b': 'bola'}], 'correct': 'a']}
question = [{
    'course': 'bio',
    'question': 'what is the capital of nigeria',
    'options': [{'text': 'lagos', 'correct': False}, {'text': 'abuja', 'correct': True}, {'text': 'abeokuta', 'correct': False}]
    },
    {
    'course': 'bio',
    'question': 'when did Nigeria become independent',
    'options': [{'text': 1960, 'correct': True}, {'text': 1934, 'correct': False}, {'text': 1238, 'correct': False}]
    }]
data = {"course": "bio", "questions": question}

res = requests.post('http://localhost:3000/examiner/create-exam', headers=header, json=data)
print(res.json())
