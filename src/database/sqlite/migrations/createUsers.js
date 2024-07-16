const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  avatar NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  upload_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  )
`;

module.exports = createUsers