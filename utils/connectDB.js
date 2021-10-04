import mongoose from 'mongoose';

const connectDB = async () => {
  const connection = {}
  if (connection.isConnected) return

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  connection.isConnected = db.connections[0].readyState
  console.log(connection.isConnected)
}

export default connectDB
