// CREATE TABLE volunteer (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255),
//     name VARCHAR(255),
//     experience VARCHAR(255),
//     education VARCHAR(255),
//     occupation VARCHAR(255),
//     about VARCHAR(255)
// )

// CREATE TABLE volunteer_skills (
//     id SERIAL PRIMARY KEY,
//     user_id INT,
//     skill_id INT,
//     FOREIGN KEY (user_id) REFERENCES volunteer(id),
//     FOREIGN KEY (skill_id) REFERENCES skills(id)
// )

// CREATE TABLE skills (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255)
// )

const { pool } = require("@/utils/pg");

const registerVolunteer = async (user) => {
  await pool.query("INSERT INTO volunteer (email, name) VALUES ($1, $2)", [
    user.email,
    user.name,
  ]);
  return;
};

const checkVolunteer = async (email) => {
  const { rows } = await pool.query("SELECT * FROM volunteer WHERE email=$1", [
    email,
  ]);
  return rows.length !== 0 ? true : false;
};

const getVolunteer = async (email) => {
  const { data } = await pool.query("SELECT * FROM volunteer WHERE email=$1", [
    email,
  ]);
  const { skills } = await pool.query(
    "SELECT skills.name FROM skills INNER JOIN user_skills ON skills.id = user_skills.skill_id WHERE user_skills.user_id = $1",
    [data[0].id],
  );
  return { data, skills };
};

const getRole = async (email) => {
  const { rows } = await pool.query(
    "SELECT * FROM roles WHERE id = (SELECT role_id FROM userdata WHERE email=$1)",
    [email],
  );
  return rows;
};

export { checkVolunteer, registerVolunteer, getVolunteer, getRole };
