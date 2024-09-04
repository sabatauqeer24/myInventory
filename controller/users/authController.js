import { User } from "../../models/User.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const signedupUser = await User.findOne({ email: email });
    if (email != signedupUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);

      const signupRes = await User.create({
        email: email,
        username: username,
        password: hashedPassword,
      });
      console.log("user signed up");
      res.status(201).send(signupRes);
    }
  } catch (error) {
    console.log(error);
    res
      .status(409)
      .send(`error registering user: email and username already exist  `);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.findOne({ email: email });
    console.log("userfound:", user);
    if (!user) {
      return res.status(404).json({ message: "user  not found" });
    }
    const userPassword = await User.findOne({ password });

    const isMatch = await bcrypt.compare(password, userPassword, () => {
      if (isMatch) {
        return res
          .status(401)
          .json({ msg: "The password you entered is incorrect" });
      }
      console.log("user logged n");
      res.json(user);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(`error registering user: ${error.message}`);
  }
};
