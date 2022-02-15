const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const createNewNote = (body, notesArray) => {
  const note = body;
  note.id = uuidv4();
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );

  return note;
};

const findNoteById = (id, notesArray) => {
  return (result = notesArray.filter((note) => note.id === id)[0]);
};

const deleteNote = (id, notesArray) => {
  const newNotesArray = notesArray.filter((note) => note.id !== id);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: newNotesArray }, null, 2)
  );

  return newNotesArray;
};

module.exports = { createNewNote, findNoteById, deleteNote };
