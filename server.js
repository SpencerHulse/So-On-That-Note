const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRoutes);

app.listen(PORT, (req, res) => {
  console.log("The server is listening on port 3001");
});
