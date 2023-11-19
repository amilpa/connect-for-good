// CREATE TABLE organization (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255),
//     address VARCHAR(255),
//     name VARCHAR(255),
//     description VARCHAR(255),
//     goals VARCHAR(255)
// )

import { pool } from "@/utils/pg";

const checkOrganization = async (email) => {
  const { rows } = await pool.query(
    "SELECT * FROM organization WHERE email=$1",
    [email],
  );
  return rows.length !== 0 ? true : false;
};

const registerOrganization = async (org) => {
  // insert only name and email
  await pool.query("INSERT INTO organization (email, name) VALUES ($1, $2)", [
    org.email,
    org.name,
  ]);
};

const getOrganization = async (email) => {
  const { rows } = await pool.query(
    "SELECT * FROM organization WHERE email=$1",
    [email],
  );
  return rows;
};

export { getOrganization, checkOrganization, registerOrganization };
