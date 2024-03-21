import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.connect("mongodb+srv://agrawalaman1210:1IT0FzJVs9YEpC3z@cluster0.aedhuow.mongodb.net/")
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to Database and Listening to Localhost 5000")
  )
  .catch((err) => console.log(err));