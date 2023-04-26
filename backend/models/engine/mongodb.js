#!/usr/bin/node
/* mongodb will serve as the question bank the app */
const { MongoClient, ObjectId } = require('mongodb');

class QuestionBank {
  constructor () {
    const database = process.env.EXAMIO_DB || 'examio_db';
    const port = 27017;
    const host = process.env.EXAMIO_HOST || 'localhost';

    this.mongoClient = new MongoClient(`mongodb://${host}:${port}/${database}`);
    this.mongoClient.connect()
  }

  isAlive() {
    return this.mongoClient.isConnected();
  }

  async countQuestions(match) {
    this.database = this.mongoClient.db();
    this.quesBank = this.database.collection('questions');
    const count = await this.quesBank.count(match);
    return count;
  }

  async createExam(questions, examId) {
    this.database = this.mongoClient.db();
    this.quesBank = this.database.collection('questions');
    for (let question of questions) {
      question.examId = examId;
    }
    const examQuestions = await this.quesBank.insertMany(questions);
    return examQuestions.ops;
  }

  async getQuestions(examId, page = null) {
    this.database = this.mongoClient.db();
    this.quesBank = this.database.collection('questions');
    if (page === null) {
      const questions = await this.quesBank.find({ examId }).toArray();
      return questions;
    }
    const pipeline = [
      { $match: { examId } },
      { $skip: parseInt(page, 10) * 5},
      { $limit: 5 },
      { $project: { _id: 0, examId: 1, course: 1, question: 1, options: 1, correct: 1, no: 1} },
    ]
    const questions = await this.quesBank.aggregate(pipeline).toArray();
    return questions;
  }
}

const mongod = new QuestionBank();
setTimeout(() => console.log(mongod.isAlive()), 3000);

module.exports = mongod;
