DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(18) NOT NULL,
  password_digest VARCHAR(500) NOT NULL,
  joined_at TIMESTAMP NOT NULL DEFAULT now()
);