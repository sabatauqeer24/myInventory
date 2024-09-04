import { User } from "../../models/User.js";
export const updateUser = async (req, res) => {
  const { id } = req.params;

  const updatedUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  console.log("user updated");
  res.json(updatedUser);
};
