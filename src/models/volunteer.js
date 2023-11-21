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
  const { rows: data } = await pool.query(
    "SELECT * FROM volunteer WHERE email=$1",
    [email],
  );
  const { rows: skills } = await pool.query(
    "SELECT * FROM skills WHERE id IN (SELECT skill_id FROM volunteer_skills WHERE user_id = (SELECT id FROM volunteer WHERE email=$1))",
    [email],
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

const updateVolunteer = async (user) => {
  await pool.query(
    "UPDATE volunteer SET name=$1, experience=$2, education=$3, occupation=$4, about=$5 WHERE email=$6",
    [
      user.name,
      user.experience,
      user.education,
      user.occupation,
      user.about,
      user.email,
    ],
  );
  return;
};

export {
  updateVolunteer,
  checkVolunteer,
  registerVolunteer,
  getVolunteer,
  getRole,
};
