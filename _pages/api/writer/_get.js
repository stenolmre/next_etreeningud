import connectDB from "./../../../utils/connectDB";
import Writer from "./../../../models/writer";

export default async function (req, res) {
  await connectDB();
  try {
    const writers = await Writer.find();

    if (!writers) return res.status(404).json({ msg: "Writers not found." });

    res.send(writers);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
