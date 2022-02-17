const Note = require("../models/Note");

// Gets all of the notes in the DB
const getAllNotes = async (req, res) => {
  try {
    const tasks = await Note.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Creates a new note and adds it to the DB
const createNewNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Finds a single note by its unique ID
const findNoteById = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const foundNote = await Note.findOne({ _id: noteID });

    res.status(200).json(foundNote);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const deletedNote = await Note.findOneAndDelete({ _id: noteID });

    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllNotes, createNewNote, findNoteById, deleteNote };
