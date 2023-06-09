#!/usr/bin/node
const express = require('express');
const User = require('../controllers/user');
const auth = require('../middlewares/auth');
const Examination = require('../controllers/exam');
const History = require('../controllers/history');

const router = express.Router();

/* get requests */
router.get('/', (req, res) => {
  res.status(200).json("Welcome to ExamIO");
});
router.get('/student/take-exam', Examination.takeExam);
router.get('/student/history', auth, History.studentRecords);
router.get('/student/history/:examId', auth, History.studentRecord);
router.get('/examiner/history', auth, History.examinerRecords)
router.get('/examiner/get-questions/:examId', auth, History.getQuestions);
router.get('/student/end-exam', Examination.endExam);
/* post requests */
router.post('/student/signup', User.studentSignUp);
router.post('/student/signin', User.studentSignIn);
router.post('/examiner/signup', User.examinerSignUp);
router.post('/examiner/signin', User.examinerSignIn);
router.post('/student/submit', Examination.submitExam);
router.post('/examiner/create-exam', auth, Examination.createExam);


module.exports = router;
