// CREATE TABLE userdata (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255),
//     role_id INT,
//     FOREIGN KEY (role_id) REFERENCES roles(id)
// )

// CREATE TABLE roles (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255)
// )

const { pool } = require("@/utils/pg");

const registerUser = async (user) => {
  const { id } = await pool.query("SELECT id FROM roles WHERE name=$1", [
    user.role,
  ]);
  await pool.query("INSERT INTO userdata (email, role_id) VALUES ($1, $2)", [
    user.email,
    id,
  ]);
  return;
};

const checkUser = async (email) => {
  const { rows } = await pool.query("SELECT * FROM userdata WHERE email=$1", [
    email,
  ]);
  if (rows.length > 0) {
    return true;
  }
  return false;
};

export { registerUser, checkUser };
