import connectDB from "./../../../utils/connectDB";
import Settings from "./../../../models/settings";

export default async function (req, res) {
  await connectDB();
  const { id } = req.query;
  const { landing } = req.body;

  let fields = {};
  if (landing) fields.landing = landing;

  try {
    let edit_landing_settings = await Settings.findById(id);

    if (edit_landing_settings) {
      edit_landing_settings = await Settings.findOneAndUpdate(
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
