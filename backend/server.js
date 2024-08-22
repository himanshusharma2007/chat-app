const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const authRouter = require("./routers/authRouter");
const { connectMongoDB } = require("./db/connectMongoDB");
const PORT = process.env.PORT || 8000;
const messageRouter=require("./routers/messageRouter")
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

app.get("/", (req, res) => {
  res.send("this is home ");
});

app.listen(PORT, () => {
  connectMongoDB();
  console.log("server is running on port 3000");
});
