const { db, pgp } = require('../config/conn');

module.exports = {
  create(user) {
    return db.one(`
    INSERT INTO users
    (username, password_digest)
    VALUES ($/username/, $/password_digest/)
    RETURNING *
    `, book);
  },
}