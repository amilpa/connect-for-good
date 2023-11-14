import { getRole } from "@/models/user";
export default async function handler(req, res) {
  if (req.method == "POST") {
    const rows = await getRole(req.body.email);
    res.status(200).json({ role: rows[0].name });
  }
  res.status(405).json({ error: "Method not allowed" });
}
