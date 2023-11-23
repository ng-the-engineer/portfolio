import mongoose from "mongoose";
import Certificate from "../backend/persistence/models/certificates";
import { certificates } from "./data";

const seedCertificates = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/portfolio-db");

    await Certificate.deleteMany();
    console.log("All certificates are deleted");
    await Certificate.insertMany(certificates);
    console.log("All certificates are inserted");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

seedCertificates();
