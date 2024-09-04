import { Item } from "../../models/Item.js";
export const updateItem = async (req, res) => {
  try {
    const { userId } = req.params;
    const { oldItemValue, newItemValue } = req.body;
    if (!oldItemValue) {
      return res.send("no item found");
    }

    const updatedItem = await Item.updateOne(
      { userId: userId, itemValue: oldItemValue },
      { $set: { "itemValue.$": newItemValue } },
      { upsert: true }
    );
    console.log("item updated");
    res.json(updatedItem);
  } catch (error) {
    res.status(404).send(`error updating :${error.message}`);
  }
};
