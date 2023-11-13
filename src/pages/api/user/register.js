import { checkUser, registerUser } from "@/models/user";
export default async function handler(req, res) {
  if (req.method == "POST") {
    const check = await checkUser(req.body.email);
    let user = {};
    if (req.body.email === "amilpa2020@gmail.com") {
      user = {
        email: req.body.email,
        role: "organization",
      };
    } else {
      user = {
        email: req.body.email,
        role: "user",
      };
    }
    if (!check) {
      await registerUser(user);
    }
    res.status(200).json({ msg: "Success" });
  }
  res.status(405).json({ error: "Method not allowed" });
}
