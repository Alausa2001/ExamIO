#!/usr/bin/env python3
import requests

def signup():
    """ examiner signup  """
    header = {'Content-Type': 'application/json'}
    data = {'firstname': 'eniola', 'lastname': 'ogede', 'email': 'ogede@ymail', 'password': 'ogede001'}
    res = requests.post('http://api.examio.feranmi.tech/api/examiner/signup', headers=header, json=data)
    print(res.json())

def signin():
    """examiner signin"""
    header = {'Content-Type': 'application/json'}
    data = {'email': 'ogede@ymail', 'password': 'ogede001'}
    res = requests.post('http://api.examio.feranmi.tech/api/examiner/signin', headers=header, json=data)
    print(res.json())
    return res.headers.get('Authorization')

def createexam(token):
    
    header = {"Authorization": token, "Content-Type": "application/json" }

    #data = {"course": "bio", 'questions': [{'question': 'say my name', 'options': [{ 'a': 'feranmi', 'b': 'bola'}], 'correct': 'a']}
    question = [
        {
            'no': 1,
            'course': 'chemistry',
            'question': 'Which element has the symbol "O"?',
            'options': [{'text': 'Oxygen', 'correct': True}, {'text': 'Osmium', 'correct': False}, {'text': 'Oganesson', 'correct': False}],
            'correct': 0
        },
        {
            'no': 2,
            'course': 'chemistry',
            'question': 'What is the chemical symbol for gold?',
            'options': [{'text': 'Ag', 'correct': False}, {'text': 'Cu', 'correct': False}, {'text': 'Au', 'correct': True}],
            'correct': 2
        },
        {
            'no': 3,
            'course': 'chemistry',
            'question': 'What is the pH of a neutral solution?',
            'options': [{'text': '7', 'correct': True}, {'text': '14', 'correct': False}, {'text': '1', 'correct': False}],
            'correct': 0
        },
        {
            'no': 4,
            'course': 'chemistry',
            'question': 'What is the common name for sodium chloride?',
            'options': [{'text': 'Sugar', 'correct': False}, {'text': 'Salt', 'correct': True}, {'text': 'Pepper', 'correct': False}],
            'correct': 1
        },
        {
            'no': 5,
            'course': 'chemistry',
            'question': 'What is the chemical formula for water?',
            'options': [{'text': 'H2O', 'correct': True}, {'text': 'CO2', 'correct': False}, {'text': 'CH4', 'correct': False}],
            'correct': 0
        },
        {
            'no': 6,
            'course': 'chemistry',
            'question': 'What is the smallest unit of an element?',
            'options': [{'text': 'Molecule', 'correct': False}, {'text': 'Ion', 'correct': False}, {'text': 'Atom', 'correct': True}],
            'correct': 2
        },
        {
            'no': 7,
            'course': 'chemistry',
            'question': 'What is the atomic number of carbon?',
            'options': [{'text': '6', 'correct': True}, {'text': '8', 'correct': False}, {'text': '14', 'correct': False}],
            'correct': 0
        },
        {
            'no': 8,
            'course': 'chemistry',
            'question': 'What is the name of the process by which a solid changes directly to a gas?',
            'options': [{'text': 'Evaporation', 'correct': False}, {'text': 'Sublimation', 'correct': True}, {'text': 'Condensation', 'correct': False}],
            'correct': 1
        },
        {
            'no': 9,
            'course': 'chemistry',
            'question': 'What is the chemical formula for ammonia?',
            'options': [{'text': 'NH3', 'correct': True}, {'text': 'N2', 'correct': False}, {'text': 'CO2', 'correct': False}],
            'correct': 0
        },
        {
            'no': 10,
            'course': 'chemistry',
            'question': 'What is the name of the process by which a gas changes directly to a solid?',
            'options': [{'text': 'Sublimation', 'correct': False}, {'text': 'Condensation', 'correct': False}, {'text': 'Deposition', 'correct': True}],
            'correct': 2
        },
        {
            'no': 11,
            'course': 'chemistry',
            'question': 'What is the chemical symbol for iron?',
            'options': [{'text': 'Fe', 'correct': True}, {'text': 'Zn', 'correct': False}, {'text': 'Ag', 'correct': False}],
            'correct': 0
        },
        ]

    data = {"course": "bio", "questions": question}

    res = requests.post('http://api.examio.feranmi.tech/api/examiner/create-exam', headers=header, json=data)
    print(res.json())

if __name__ == "__main__":
    signup()
    token = signin()
    createexam(token)
