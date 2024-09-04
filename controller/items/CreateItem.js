import mongoose from "mongoose";
import { Item } from "../../models/Item.js";

export const createItem = async (req, res) => {
  const { userId } = req.params;
  const { itemValue } = req.body;
  const dbcollection = await mongoose.connection.db
    .listCollections({
      name: "items",
    })
    .toArray();
  if (dbcollection.length === 0) {
    const itemRes = await Item.create({
      itemValue: itemValue,
      userId: userId,
    });
    console.log("item added to new collection");
    return res.send(itemRes);
  } else {
    const UpdatedItems = await Item.updateOne(
      { userId: userId },
      { $push: { itemValue: itemValue } },
      { upsert: true }
    );

    return res.send(UpdatedItems);
  }
};
