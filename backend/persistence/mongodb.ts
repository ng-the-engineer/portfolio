import mongoose from "mongoose";

export const connect = async () => {
  console.log("Mongo DB state:", mongoose.connection.readyState);

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  let DB_URI = "";
  if (process.env.NODE_ENV === "development")
    DB_URI = process.env.DB_LOCAL_URI!;
  if (process.env.NODE_ENV === "production") DB_URI = process.env.DB_URI!;

  console.log("DB_URI:", DB_URI);

  await mongoose.connect(DB_URI).then((conn) => console.log("DB is connected"));
};

export default connect;
