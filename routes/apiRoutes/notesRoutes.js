const router = require("express").Router();
const { createNewNote } = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  const results = notes;

  res.status(200).json(results);
});

router.post("/notes", (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;
