require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

let state = {
  db: null,
};

const dbName = process.env.APP_DB || 'peculiar';

module.exports = {

  connect: (url, done) => {
    if (state.db) return done();

    MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
      if (err) return done(err);
      state.db = client.db(dbName);
      done();
    });
  },

  get: () => {
    return state.db;
  },

  close: (done) => {
    if (state.db) {
      state.db.close((err, result) => {
        state.db = null;
        state.mode = null;
        done(err);
      });
    }
  },
};