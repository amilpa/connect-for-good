// CREATE TABLE event (
//     id SERIAL PRIMARY KEY,
//     eventName VARCHAR(255),
//     eventGoals VARCHAR(255),
//     eventExpectedTime INT,
//     eventDescription VARCHAR(255)
// );

// CREATE TABLE application (
//       id SERIAL PRIMARY KEY,
//       volunteerid INT,
//       eventid INT,
//       message VARCHAR(255),
//       FOREIGN KEY (volunteerid) REFERENCES volunteer(id),
//       FOREIGN KEY (eventid) REFERENCES event(id)
// );

import { pool } from "@/utils/pg";

export const addEvent = async (event) => {
  await pool.query(
    "INSERT INTO event (eventName, eventGoals, eventExpectedTime, eventDescription) VALUES ($1, $2, $3, $4)",
    [
      event.eventName,
      event.eventGoals,
      event.eventExpectedTime,
      event.eventDescription,
    ]
  );
  return;
};

export const getEvents = async (name) => {
  const { rows } = await pool.query(
    "SELECT * FROM event WHERE eventName ILIKE $1",
    ["%" + name + "%"]
  );
  return rows;
};

export const getEvent = async (id) => {
  const { rows } = await pool.query("SELECT * FROM event WHERE id = $1", [id]);
  return rows;
};

export const deleteEvent = async (id) => {
  await pool.query("DELETE FROM event WHERE id = $1", [id]);
  return;
};
