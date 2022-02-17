const express = require("express");
const router = express.Router();

// Controller variables
const {
  getAllNotes,
  createNewNote,
  findNoteById,
  deleteNote,
} = require("../../lib/notes");

// Routes
router.route("/notes").get(getAllNotes).post(createNewNote);
router.route("/notes/:id").get(findNoteById).delete(deleteNote);

module.exports = router;
