const router = require("express").Router();

const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  const results = notes;
  console.log(notes, results);

  res.status(200).json(results);
});

module.exports = router;
