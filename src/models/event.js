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

export const getEvents = async (name) => {
  if (name !== "") {
    const { rows } = await pool.query(
      "SELECT * FROM event WHERE eventName ILIKE $1",
      ["%" + name + "%"],
    );
    return rows;
  } else {
    const { rows } = await pool.query("SELECT * FROM event");
    return rows;
  }
};

export const getEvent = async (id) => {
  const { rows } = await pool.query("SELECT * FROM event WHERE id = $1", [id]);
  return rows;
};

export const deleteEvent = async (id) => {
  await pool.query("DELETE FROM event WHERE id = $1", [id]);
  return;
};
