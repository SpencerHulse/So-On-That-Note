const express = require("express");
const app = express();

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
