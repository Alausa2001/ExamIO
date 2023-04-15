#!/usr/bin/node
const express = require('express');
const User = require('../controllers/user');
const auth = require('../auth');
const Examination = require('../controllers/exam');

const router = express.Router();

/* get requests */
router.get('/', (req, res) => {
  res.status(200).json("Hello World");
});

/* post requests */
router.post('/student/signup', User.studentSignUp);
router.post('/student/signin', User.studentSignIn);
router.post('/examiner/signup', User.examinerSignUp);
router.post('/examiner/signin', User.examinerSignIn);

router.post('/examiner/create-exam', auth, Examination.createExam);

module.exports = router;