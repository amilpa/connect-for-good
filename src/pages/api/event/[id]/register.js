export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await getEvent(req.query.id);
    if (data.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }
    return res.status(200).json(data[0]);
  }
  res.status(405).json({ error: "Method not allowed" });
}
