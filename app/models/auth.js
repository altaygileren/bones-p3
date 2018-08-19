const { db, pgp } = require('../config/conn');
const bcrypt = require('bcryptjs');


 function create(user) {
  return bcrypt.hash(user.password, 8)
    .then((hash) => {
      return db.one(`
        INSERT INTO users (username, password_digest)
        VALUES ($1, $2)
        RETURNING *
      `,  [user.username, hash]
      );
    });
}
  module.exports = {
      create
}