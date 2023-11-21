import { updateVolunteer } from "@/models/volunteer";
import { updateOrganization } from "@/models/organization";
export default async function handler(req, res) {
  if (req.method == "PUT") {
    const body = req.body;
    if (body.role == "volunteer") {
      await updateVolunteer(body.data);
      res.status(200).json({ msg: "Success" });
    } else if (body.role == "organization") {
      await updateOrganization(body.data);
      res.status(200).json({ msg: "Success" });
    }
  }
  res.status(405).json({ error: "Method not allowed" });
}
