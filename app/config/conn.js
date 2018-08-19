const pgp = require('pg-promise')();

const opts = {
  database: 'bones_news_db'
};

const db = pgp(opts);

module.exports = {
  pgp,
  db
};