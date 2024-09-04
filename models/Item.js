import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
  itemValue: {
    type: Array,
    required: true,
  },
  userId: {
    type: String,
  },
});

export const Item = mongoose.model("Item", ItemSchema);
