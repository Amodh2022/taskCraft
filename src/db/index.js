import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});


const connectDb = async () => {
    try {
    await mongoose.connect(
        `${process.env.MONGOOSE_DB}/${process.env.DB_NAME}`
      );
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.log(`Mongoose Error${error}`, error);
      process.exit(1);
    }
  };

export {connectDb};
