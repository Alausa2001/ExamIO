#!/usr/bin/env python3
import requests

def signup():
    """ student signup  """
    header = {'Content-Type': 'application/json'}
    data = {'firstname': 'Abdulqoyum', 'lastname': 'Abdulqoyum', 'email': 'Abdulqoyum@ymail', 'password': 'Abdulqoyum001'}
    res = requests.post('http://localhost:3000/api/student/signup', headers=header, json=data)
    print(res.json())

def signin():
    """student signin"""
    header = {'Content-Type': 'application/json'}
    data = {'email': 'Abdulqoyum@ymail', 'password': 'Abdulqoyum001'}
    res = requests.post('http://localhost:3000/api/student/signin', headers=header, json=data)
    print(res.json())
    return res.headers.get('Authorization')

def takeexam(token):
    """ take exam """

    header = {'Authorization': token, 'Content-Type': 'application/json'}
    data = {'examId': '1f05ab02-50b4-408a-b413-f305dbd143b6', 'page': 2}
    res = requests.get('http://localhost:3000/api/student/take-exam', headers=header, json=data)
    print(res.json())

if __name__ == "__main__":
    signup()
    token = signin()
    takeexam(token)
