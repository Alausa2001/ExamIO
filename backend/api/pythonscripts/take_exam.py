#!/usr/bin/env python3
import requests

def signup():
    """ student signup  """
    header = {'Content-Type': 'application/json'}
    data = {'firstname': 'Abdulqoyum', 'lastname': 'Abdulqoyum', 'email': 'Abdulqoyum@ymail', 'password': 'Abdulqoyum001'}
    res = requests.post('http://localhost:3000/student/signup', headers=header, json=data)
    print(res.json())

def signin():
    """student signin"""
    header = {'Content-Type': 'application/json'}
    data = {'email': 'Abdulqoyum@ymail', 'password': 'Abdulqoyum001'}
    res = requests.post('http://localhost:3000/student/signin', headers=header, json=data)
    print(res.json())
    return res.headers.get('Authorization')

def takeexam(token):
    """ take exam """

    header = {'Authorization': token, 'Content-Type': 'application/json'}
    data = {'examId': '1ac1ceaa-bd51-452f-90a2-4d188c07f55f', 'page': 2}
    res = requests.get('http://localhost:3000/student/take-exam', headers=header, json=data)
    print(res.json())

if __name__ == "__main__":
    signup()
    token = signin()
    takeexam(token)
