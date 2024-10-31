import connectDB from "./../../../utils/connectDB";
import Settings from "./../../../models/settings";

export default async function (req, res) {
  await connectDB();
  try {
    const settings = new Settings(req.body);

    await settings.save();

    res.send(settings);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
