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
}

const mongod = new QuestionBank();
setTimeout(() => console.log(mongod.isAlive()), 3000);
