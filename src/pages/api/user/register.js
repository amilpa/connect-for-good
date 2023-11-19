import { registerOrganization } from "@/models/organization";
import { registerVolunteer } from "@/models/volunteer";
export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const data = req.body;
      if (data.role == "volunteer") {
        await registerVolunteer({ name: data.name, email: data.email });
      } else if (data.role == "organization") {
        await registerOrganization({
          name: data.name,
          email: data.email,
        });
      }
    } catch (error) {
      console.log(error);
    }
    res.status(200).json({ msg: "Success" });
  }
  res.status(405).json({ error: "Method not allowed" });
}
