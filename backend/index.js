import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

const notes = []
app.use(cors());
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const newNote = {
    id: req.body.id || uuidv4(),
    title: req.body.title,
    content: req.body.content,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
  const noteId = req.params.id;
  const noteIndex = notes.findIndex((note) => note.id === noteId);
  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    res.status(200).json({ message: "Note deleted successfully" });
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
