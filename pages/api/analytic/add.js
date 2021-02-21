import connectDB from './../../../utils/connectDB'
import Analytic from './../../../models/analytic'

connectDB()

export default async function (req, res) {
  const { id, category } = req.body

  if (!id || !category) return res.status(401).json({ msg: 'Statistilise näitaja ID ja Kategooria on kohustuslikud.' })

  try {
    const analytic = new Analytic(req.body)

    await analytic.save()

    const analytics = await Analytic.find().sort({ createdAt: -1 })

    res.send(analytics)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}
