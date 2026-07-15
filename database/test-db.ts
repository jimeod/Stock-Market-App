import "dotenv/config";
import { connectToDataBase } from "./mongoose";

const test = async () => {
  try {
    const db = await connectToDataBase();

    console.log("Database connected:", db.connection.name);
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

test();