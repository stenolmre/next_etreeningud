import connectDB from "./../../../utils/connectDB";
import Writer from "./../../../models/writer";

export default async function (req, res) {
  await connectDB();
  const { id } = req.query;

  try {
    const writer = await Writer.findById(id);

    if (!writer) return res.status(404).json({ msg: "Writer not found." });

    await writer.remove();

    const writers = await Writer.find();

    res.send(writers);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
}
