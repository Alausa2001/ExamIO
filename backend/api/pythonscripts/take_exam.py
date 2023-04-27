#!/usr/bin/env python3
import requests

def signup():
    """ student signup  """
    header = {'Content-Type': 'application/json'}
    data = {'firstname': 'Abdulqoyum', 'lastname': 'Abdulqoyum', 'email': 'Abdulqoyum@ymail', 'password': 'Abdulqoyum001'}
    res = requests.post('http://api.examio.feranmi.tech/api/student/signup', headers=header, json=data)
    print(res.json())

def signin():
    """student signin"""
    header = {'Content-Type': 'application/json'}
    data = {'email': 'Abdulqoyum@ymail', 'password': 'Abdulqoyum001'}
    res = requests.post('http://api.examio.feranmi.tech/api/student/signin', headers=header, json=data)
    print(res.json())
    return res.headers.get('Authorization')

def takeexam(token):
    """ take exam """

    header = {'Authorization': token, 'Content-Type': 'application/json'}
    data = {'examId': '3f6ed250-a258-48ba-b7b4-32ba231d7475', 'page': 1}
    res = requests.get('http://api.examio.feranmi.tech/api/student/take-exam', headers=header, params=data)
    print(res.json())

if __name__ == "__main__":
    signup()
    token = signin()
    takeexam(token)
