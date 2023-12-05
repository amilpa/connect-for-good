// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addEvent, getEvents } from "@/models/event";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const event = req.body;
      if (
        event.eventName === "" ||
        event.eventGoals === "" ||
        event.eventExpectedTime === "" ||
        event.eventDescription === ""
      ) {
        return res.status(400).json({ error: "Please fill all fields" });
      }
      await addEvent(req.body);
    } catch (error) {
      console.log(error);
    }
    res.status(200).json({ msg: "Success" });
  }
  if (req.method === "GET") {
    const { name } = req.query;
    const events = await getEvents(name);
    res.status(200).json(events);
  }
  res.status(405).json({ error: "Method not allowed" });
}
