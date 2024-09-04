import mongoose from "mongoose";

export const db = async (req, res) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection) {
      console.log("server is conneceted to db");
    }
  } catch (error) {
    res.json({ msg: error.msg });
  }
};
