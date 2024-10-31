import connectDB from "./../../../utils/connectDB";
import Analytic from "./../../../models/analytic";

export default async function (req, res) {
  await connectDB();
  try {
    const analytics = await Analytic.find().sort({ createdAt: -1 });

    if (!analytics)
      return res.status(404).json({ msg: "Analytics not found." });

    res.send(analytics);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
