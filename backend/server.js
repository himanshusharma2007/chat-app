const express = require("express");
const app = express();
const { connectMongoDB } = require("./db/connectMongoDB");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

const authRouter = require("./routers/authRouter");
const messageRouter = require("./routers/messageRouter");
const getUserRouter = require("./routers/getUserRouter");
const homeRouter = require("./routers/homeRouter");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Enable sending cookies with requests
  })
);

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", getUserRouter);
app.use("/api/chats", homeRouter);

app.get("/", (req, res) => {
  res.send("this is home ");
});

app.listen(3000, () => {
  connectMongoDB();
  console.log("server is running on port 3000");
});
