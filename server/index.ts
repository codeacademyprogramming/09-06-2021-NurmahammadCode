import express from "express";
import mongoose from "mongoose";
import ROUTES from "./routes";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://new_user_nur:112233nuru@cluster0.pyvo4.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongoose connected");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

ROUTES.forEach((item) => {
  app.use(item.path, item.router);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
