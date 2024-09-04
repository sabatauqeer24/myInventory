import { Item } from "../../models/Item.js";
export const deleteItem = async (req, res) => {
  const { id, userId } = req.params;
  const { itemValue, deleteSingle, deleteAll } = req.body;
  try {
    if (deleteSingle || itemValue) {
      const deletedItem = await Item.updateOne(
        { userId: userId },
        { $pull: { itemValue: itemValue } },
        { upsert: true }
      );
      res.send("deleted single");
    }

    if (deleteAll) {
      const deletedItems = await Item.deleteMany({ userId: userId, _id: id });
      res.send("deleted all");
    }
  } catch (error) {}
};
