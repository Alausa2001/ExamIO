#!/usr/bin/env python3
import requests

def signin():
    """ student signin """
    header = {'Content-Type': 'application/json'}
    data = {'email': 'Abdulqoyum@ymail', 'password': 'Abdulqoyum001'}
    res = requests.post('http://api.examio.feranmi.tech/api/student/signin', headers=header, json=data)
    print(res.json())
    return res.headers.get('Authorization')

def records(token):
    """ exam records """
    header = {'Authorization': token, 'Content-Type': 'application/json'}
    # data = {'examId': '1f05ab02-50b4-408a-b413-f305dbd143b6', 'score': 68, 'duration': '120 mins', 'course': 'chemistry'}
    res = requests.get('http://api.examio.feranmi.tech/api/student/history', headers=header)
    print(res.json())
    return res.json().get('records')[0].get('examId')

def exam_record(examId, token):
    header = {'Authorization': token, 'Content-Type': 'application/json'}
    # data = {'examId': '1f05ab02-50b4-408a-b413-f305dbd143b6', 'score': 68, 'duration': '120 mins', 'course': 'chemistry'}
    res = requests.get(f'http://api.examio.feranmi.tech/api/history/{examId}', headers=header)
    print(res.json())

if __name__ == "__main__":
    token = signin()
    examid = records(token)
    exam_record(examid, token)
