const router = require("express").Router();
const { createNewNote, findNoteById, deleteNote } = require("../../lib/notes");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  const results = notes;

  res.status(200).json(results);
});

router.get("/notes/:id", (req, res) => {
  const result = findNoteById(req.params.id, notes);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).sendStatus(404);
  }
});

router.post("/notes", (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const newNotes = deleteNote(req.params.id, notes);
  res.json(newNotes);
});

module.exports = router;
