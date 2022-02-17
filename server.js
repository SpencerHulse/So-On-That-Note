const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Port - ENV URL
const PORT = process.env.PORT || 3001;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`The server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
