import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

import postRoutes from "./routes/posts.js";

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json({ limit: "500mb ", extended: true }));
app.use(bodyParser.urlencoded({ limit: "500mb ", extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/posts", upload.single("selectedFile"), postRoutes);

const CONNECTION_URL =
  "mongodb+srv://salmanejaz8125:U1UifAh6h9UYZ8Z1@cluster0.s0yyuws.mongodb.net/test";

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
