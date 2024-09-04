import { Item } from "../../models/Item.js";
export const FindItems = async (req, res) => {
  const { id, userId } = req.params;
  const { itemValue } = req.body;
  const regex = new RegExp(itemValue, "i");
  const findRes = await Item.findOne({
    _id: id,
    userId: userId,
    itemValue: { $regex: regex },
  });
  console.log("res found");
  return res.json(findRes);
};
