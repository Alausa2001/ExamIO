#!/usr/bin/node
const redisClient = require('../../models/engine/redis');

async function auth(req, res, next) {
  const token = req.get('Authorization');
  const key = `auth_${token}`;
  try {
    const id = await redisClient.get(key);
    if (!id) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    next();
  } catch (err) {
    res.status(401).json({ error: `internal error ${err}` });
  }
}

module.exports = auth;
