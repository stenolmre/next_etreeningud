import connectDB from "./../../../utils/connectDB";
import Fitness from "./../../../models/fitness";

export default async function (req, res) {
  await connectDB();
  const { id } = req.query;
  const {
    image,
    name,
    category,
    length,
    equipment,
    intro,
    warmup,
    workout,
    cooldown,
  } = req.body;

  if (!image || !name || !category || !length || !intro || !equipment)
    return res
      .status(401)
      .json({ msg: "Please fill all fields with correct information." });

  let fields = {};
  if (image) fields.image = image;
  if (name) fields.name = name;
  if (category) fields.category = category;
  if (length) fields.length = length;
  if (equipment) fields.equipment = equipment;
  if (intro) fields.intro = intro;
  if (warmup) fields.warmup = warmup;
  if (workout) fields.workout = workout;
  if (cooldown) fields.cooldown = cooldown;

  try {
    let edit_workout = await Fitness.findById(id);

    if (edit_workout) {
      edit_workout = await Fitness.findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: fields,
        },
        {
          new: true,
        },
      );

      const fitness = await Fitness.find().sort({ createdAt: -1 });

      return res.json({
        fitness: fitness,
        workout: edit_workout,
      });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
