// CREATE TABLE userdata (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255),
//     role_id INT,
//     name VARCHAR(255),
//     experience VARCHAR(255),
//     education VARCHAR(255),
//     occupation VARCHAR(255),
//     about VARCHAR(255),
//     FOREIGN KEY (role_id) REFERENCES roles(id)
// )

// CREATE TABLE user_skills (
//     id SERIAL PRIMARY KEY,
//     user_id INT,
//     skill_id INT,
//     FOREIGN KEY (user_id) REFERENCES userdata(id),
//     FOREIGN KEY (skill_id) REFERENCES skills(id)
// )

// CREATE TABLE skills (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255)
// )

// CREATE TABLE roles (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255)
// )

const { pool } = require("@/utils/pg");

const registerUser = async (user) => {
  const { rows } = await pool.query("SELECT id FROM roles WHERE name=$1", [
    user.role,
  ]);
  if (!rows[0].id) {
    console.log("Role not found");
    return false;
  }

  await pool.query(
    "INSERT INTO userdata (email, role_id, name) VALUES ($1, $2, $3)",
    [user.email, rows[0].id, user.name],
  );

  return;
};

const getUser = async (email) => {
  const { rows } = await pool.query("SELECT * FROM userdata WHERE email=$1", [
    email,
  ]);
  const { skills } = await pool.query(
    "SELECT skills.name FROM skills INNER JOIN user_skills ON skills.id = user_skills.skill_id WHERE user_skills.user_id = $1",
    [rows[0].id],
  );

  return { rows, skills };
};

const getRole = async (email) => {
  const { rows } = await pool.query(
    "SELECT * FROM roles WHERE id = (SELECT role_id FROM userdata WHERE email=$1)",
    [email],
  );
  return rows;
};

export { registerUser, getUser, getRole };
