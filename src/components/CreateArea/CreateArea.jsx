import React, { useState } from "react";
import {v4 as uuidv4}  from "uuid";
import "./CreateArea.css";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'

function CreateArea({ addNote }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    id : uuidv4(),
    title: "",
    content: "",
  });

  function handleNoteAdd(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function expand() {
    setExpanded(true);
  }

  function submitNote(event) {
    addNote(note)
    setNote({
      id: uuidv4(),
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleNoteAdd}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onClick={expand}
          onChange={handleNoteAdd}
          name="content"
          placeholder="Take a note..."
          rows= { isExpanded ? 3 : 1 }
          value={note.content}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
