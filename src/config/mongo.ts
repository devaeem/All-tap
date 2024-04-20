import * as mongoose from "mongoose";
import Config from "./setting";

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(Config.db.mongo.uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
const closeDatabaseConnection = () => {
  mongoose.connection.close();
};

export { connectToDatabase, closeDatabaseConnection };
