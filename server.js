import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import todoRoutes from "./routes/todoRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";


const PORT = process.env.PORT || 3000
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
