import connectDB from "./../../../utils/connectDB";
import Settings from "./../../../models/settings";

export default async function (req, res) {
  await connectDB();
  const { id } = req.query;
  const { blog_categories } = req.body;

  let fields = {};
  if (blog_categories) fields.blog_categories = blog_categories;

  try {
    let edit_blog_settings = await Settings.findById(id);

    if (edit_blog_settings) {
      edit_blog_settings = await Settings.findOneAndUpdate(
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
