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

module.exports = { createNewNote };
