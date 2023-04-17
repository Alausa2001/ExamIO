#!/usr/bin/env python3
import requests

def signin():
    """student signin"""
    header = {'Content-Type': 'application/json'}
    data = {'email': 'Abdulqoyum@ymail', 'password': 'Abdulqoyum001'}
    res = requests.post('http://localhost:3000/student/signin', headers=header, json=data)
    print(res.json())
    return res.headers.get('Authorization')

def submitexam(token):
    """ take exam """
    header = {'Authorization': token, 'Content-Type': 'application/json'}
    data = {'examId': '1f05ab02-50b4-408a-b413-f305dbd143b6', 'score': 68, 'duration': '120 mins', 'course': 'chemistry'}
    res = requests.post('http://localhost:3000/student/submit', headers=header, json=data)
    print(res.json())

if __name__ == "__main__":
    token = signin()
    submitexam(token)
