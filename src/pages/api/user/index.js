import { getUser } from "@/models/user";
export default async function handler(req, res) {
  if (req.method == "POST") {
    const { rows, skills } = await getUser(req.body.email);
    if (!rows[0]) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json({ msg: "Success", data: { ...rows[0], skills } });
  }
  res.status(405).json({ error: "Method not allowed" });
}
