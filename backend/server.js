const express = require("express");
const app = express();
const { connectMongoDB } = require("./db/connectMongoDB");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

const authRouter = require("./routers/authRouter");
const messageRouter=require("./routers/messageRouter")
const getUserRouter = require("./routers/getUserRouter");

const cookieParser=require("cookie-parser")
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", getUserRouter);

app.get("/", (req, res) => {
  res.send("this is home ");
});

app.listen(PORT, () => {
  connectMongoDB();
  console.log("server is running on port 3000");
});
