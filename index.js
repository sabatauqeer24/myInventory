import express from "express";
import { db } from "./config/db.js";
import cors from "cors";

import router from "./router/Routes.js";
import { configDotenv } from "dotenv";

const app = express();
const PORT = 3001;
app.use(express.json());
app.use("/api/MyInventory/", router);
configDotenv();
app.use(cors());

app.listen(PORT, () => {
  db();
  console.log(`server is conenected to db and is listening on ${PORT}`);
});
