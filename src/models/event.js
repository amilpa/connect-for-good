// CREATE TABLE event (
//     id SERIAL PRIMARY KEY,
//     eventName VARCHAR(255),
//     eventGoals VARCHAR(255),
//     eventExpectedTime INT,
//     eventDescription VARCHAR(255)
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
    ],
  );
  return;
};

export const getEvents = async () => {
  const { rows } = await pool.query("SELECT * FROM event");
  return rows;
};
