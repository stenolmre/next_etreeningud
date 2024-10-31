import * as _mongoose from "mongoose";

_mongoose.set("strictQuery", false);

const MONGO_URI = process.env.MONGO_URI;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
const cached = global.mongoose ?? {
  request: null,
  connection: null,
};

export default async function connect() {
  if (!MONGO_URI || MONGO_URI.length === 0) {
    throw new Error("Please add your MongoDB URI to .env.local");
  }

  if (cached.connection) {
    console.log("🚀 Using cached connection");
    return cached.connection;
  }

  if (!cached.request) {
    cached.request = _mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.connection = await cached.request;
    console.log("✅ New connection established");
    return cached.connection;
  } catch (error) {
    cached.request = null;
    console.error("❌ Connection to database failed");
    throw error;
  }
}
