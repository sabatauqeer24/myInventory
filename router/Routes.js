import express from "express";
const router = express.Router();

import { signUp, login } from "../controller/users/authController.js";
import { createItem } from "../controller/items/CreateItem.js";
import { FindItems } from "../controller/items/findItem.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { updateItem } from "../controller/items/updateItem.js";
import { deleteItem } from "../controller/items/deleteItem.js";
import { updateUser } from "../controller/users/updateUser.js";

//routes
router.post("/signup", signUp);
router.post("/login", login);
router.get("/login", login);
router.use(authMiddleware);
//item
router.get("/home/search/:userId/:id", FindItems);
router.post("/items/:userId", createItem); //create item
router.patch("/items/:userId/:id", updateItem); //update item
router.delete("/items/:userId/:id", deleteItem); //delete item
//user
router.patch("/users/:userId", updateUser); //update user
//categories
export default router;
