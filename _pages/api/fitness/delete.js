import connectDB from "./../../../utils/connectDB";
import Fitness from "./../../../models/fitness";

export default async function (req, res) {
  await connectDB();
  const { id } = req.query;

  try {
    const workout = await Fitness.findById(id);

    if (!workout) return res.status(404).json({ msg: "Workout not found." });

    await workout.remove();

    const fitness = await Fitness.find().sort({ createdAt: -1 });

    if (!fitness) return res.status(404).json({ msg: "Workouts not found." });

    res.send(fitness);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
