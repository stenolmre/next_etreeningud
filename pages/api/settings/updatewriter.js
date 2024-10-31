import connectDB from "./../../../utils/connectDB";
import Settings from "./../../../models/settings";

export default async function (req, res) {
  await connectDB();
  const { id, writerId } = req.query;

  try {
    const settings = await Settings.find();

    if (!settings) return res.status(404).json({ msg: "Settings not found." });

    let writers = settings[0].blog_writers.filter((el) => el._id !== writerId);

    await writers.push(req.body);

    let fields = {};
    if (writers) fields.blog_writers = writers;

    let add_writer = await Settings.findById(id);

    if (add_writer) {
      add_writer = await Settings.findOneAndUpdate(
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

      const settings = await Settings.find();

      return res.send(settings);
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
