import { getUser } from "@/models/user";
export default async function handler(req, res) {
  if (req.method == "POST") {
    res.status(200).json({ msg: "Success" });
  }
  res.status(405).json({ error: "Method not allowed" });
}
