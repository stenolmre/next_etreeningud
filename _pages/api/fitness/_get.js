import connectDB from "./../../../utils/connectDB";
import Fitness from "./../../../models/fitness";

export default async function (req, res) {
  await connectDB();
  try {
    const fitness = await Fitness.find().sort({ createdAt: -1 });

    if (!fitness) return res.status(404).json({ msg: "Workouts not found." });

    res.send(fitness);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
