import { getUser, registerUser } from "@/models/user";
export default async function handler(req, res) {
  if (req.method == "POST") {
    const rows = await getUser(req.body.email);
    if (rows.length == 0) {
      const user = {
        email: req.body.email,
        name: req.body.name,
        role: "user",
      };
      await registerUser(user);
    }
    res.status(200).json({ msg: "Success" });
  }
  res.status(405).json({ error: "Method not allowed" });
}
