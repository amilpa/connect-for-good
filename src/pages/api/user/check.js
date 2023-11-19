import { checkVolunteer } from "@/models/volunteer";
import { checkOrganization } from "@/models/organization";
export default async function handler(req, res) {
  if (req.method == "POST") {
    const vol = await checkVolunteer(req.body.email);
    const org = await checkOrganization(req.body.email);
    if (vol) {
      res.status(200).json({ role: "volunteer" });
      return;
    }
    if (org) {
      res.status(200).json({ role: "organization" });
      return;
    }
    if (!vol && !org) {
      res.status(200).json({ msg: "User does not exist" });
      return;
    }
  }
  res.status(405).json({ error: "Method not allowed" });
}
