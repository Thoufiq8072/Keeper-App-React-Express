import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import CreateArea from "./components/CreateArea/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("/api/notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  async function addNote(note) {
    try {
      const response = await axios.post("/api/notes", note);
      console.log("Note added:", response.data);
      setNotes((prevNotes) => [...prevNotes, response.data]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  }

  // function addNote(note) {
  //   setNotes((prevNotes) => {
  //     return [...prevNotes, note];
  //   });
  // }

  async function deleteNote(id) {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes((prevNotes) =>
        prevNotes.filter((noteItem) => noteItem.id !== id),
      );
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  // function deleteNote(id) {
  //   setNotes((prevNotes) => {
  //     return prevNotes.filter((noteItem) => noteItem.id !== id);
  //   });



  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes &&
        notes.map((noteItem) => (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            noteContents={noteItem}
            deleteNote={deleteNote}
          />
        ))}
      <Footer />
    </div>
  );
}

export default App;
