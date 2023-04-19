#!/usr/bin/env python3
import requests

def signup():
    """ student signup  """
    header = {'Content-Type': 'application/json'}
    data = {'firstname': 'Ogede', 'lastname': 'sina', 'email': 'sina@gmail', 'password': 'sina'}
    res = requests.post('http://localhost:3000/api/examiner/signup', headers=header, json=data)
    print(res.json())

def signin():
    """student signin"""
    header = {'Content-Type': 'application/json'}
    data = {'email': 'sina@gmail', 'password': 'sina'}
    res = requests.post('http://localhost:3000/api/examiner/signin', headers=header, json=data)
    print(res.json())
    return res.headers.get('Authorization')

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
        }
        ]
    data = {"course": "chemistry", "questions": question}
    res = requests.post('http://localhost:3000/api/examiner/create-exam', headers=header, json=data)
    print(res.json())

def exams_created(token):
    header = {"Authorization": token, "Content-Type": "application/json" }
    res = requests.get('http://localhost:3000/api/examiner/history', headers=header)
    print(res.json())
    return res.json().get('records')
    #[0]
    #.get('examId')

def exam_questions(records, token):
    header = {"Authorization": token, "Content-Type": "application/json" }
    for record in records:
        examId = record.get('examId')
        res = requests.get(f'http://localhost:3000/api/examiner/get-questions/{examId}', headers=header)
        print(res.json())

if __name__ == "__main__":
    signup()
    print('------------------------------------\n')
    token = signin()
    print('---------------------------------\n')
    createexam(token)
    print('==================================\n')
    records = exams_created(token)
    print('===================================\n')
    exam_questions(records, token)
