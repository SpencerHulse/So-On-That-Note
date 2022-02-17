const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { notes } = require("../db/db.json");

// Gets all of the notes in the DB
const getAllNotes = (req, res) => {
  res.status(200).json(notes);
};

// Creates a new note and adds it to the DB
const createNewNote = (req, res) => {
  // The new note is received from the request body
  const newNote = req.body;
  // A unique ID is made using uuid and assigned to the new note
  newNote.id = uuidv4();
  // The new note is pushed onto the notes list
  notes.push(newNote);
  // The json file in the DB is rewritten with the new note
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );

  res.status(201).json({ newNote });
};

// Finds a single note by its unique ID
const findNoteById = (req, res) => {
  // Get the id from req.params.id
  const { id: noteID } = req.params;
  // Filter the array to find the right note
  const foundNote = notes.filter((note) => note.id === noteID)[0];
  // Handle any cases where there is not a note
  if (foundNote) {
    res.status(200).json(foundNote);
  } else {
    res.status(404).sendStatus(404);
  }
};

const deleteNote = (req, res) => {
  // Get the id from req.params.id
  const { id: noteID } = req.params;
  // Filter the array to find the right note
  const newNotes = notes.filter((note) => note.id !== noteID);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: newNotes }, null, 2)
  );

  res.status(200).json(newNotes);
};

module.exports = { getAllNotes, createNewNote, findNoteById, deleteNote };
