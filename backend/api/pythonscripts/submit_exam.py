#!/usr/bin/env python3
import requests

def signup():
    """student signin"""
    header = {'Content-Type': 'application/json'}
    data = {'firstname': 'Adebayo', 'lastname': 'bayo', 'email': 'bayo@gmail', 'password': 'bayo001'}
    res = requests.post('http://localhost:3000/api/student/signup', headers=header, json=data)
    print(res.json())


def signin():
    """student signin"""
    header = {'Content-Type': 'application/json'}
    data = {'email': 'bayo@gmail', 'password': 'bayo001'}
    res = requests.post('http://localhost:3000/api/student/signin', headers=header, json=data)
    print(res.json())
    return res.headers.get('Authorization')

def submitexam(token):
    """ take exam """
    header = {'Authorization': token, 'Content-Type': 'application/json'}
    data = {'examId': '750d2716-1e58-40fc-b8ed-e3d68ab59150', 'score': 84, 'duration': '120 mins', 'course': 'chemistry'}
    res = requests.post('http://localhost:3000/api/student/submit', headers=header, json=data)
    print(res.json())

if __name__ == "__main__":
    signup()
    token = signin()
    submitexam(token)
