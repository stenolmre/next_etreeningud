import jwt from "jsonwebtoken";
import connectDB from "./../../../utils/connectDB";
import Admin from "./../../../models/admin";

export default async function get(req, res) {
  await connectDB();
  const jwtToken = req.headers["x-auth-token"];

  if (!jwtToken)
    return res.status(500).json({ msg: "No token. Authorization denied." });

  try {
    const decoded = jwt.verify(jwtToken, process.env.JWT_KEY);
    req.admin = decoded.id;

    const admin = await Admin.findById(req.admin);

    if (!admin) return res.status(404).json({ msg: "Admin not found." });

    res.json({
      status: "success",
      admin: admin,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
