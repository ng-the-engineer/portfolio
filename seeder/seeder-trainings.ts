import mongoose from "mongoose";
import Training from "../backend/persistence/models/trainings";
import { trainings } from "./data-trainings";

const seedTrainings = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/portfolio-db");
    await Training.deleteMany();
    console.log("All trainings are deleted");
    await Training.insertMany(trainings);
    console.log("All trainings are inserted");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

seedTrainings();
