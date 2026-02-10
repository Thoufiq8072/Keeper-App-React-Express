import React, { useState } from "react";
import {v4 as uuidv4}  from "uuid";
import "./CreateArea.css";

function CreateArea({ addNote }) {
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

  return (
    <div>
      <form
        onSubmit={(event) => {
          setNote({
            id: "",
            title: "",
            content: "",
          });
          event.preventDefault();
        }}
      >
        <input
          onChange={handleNoteAdd}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleNoteAdd}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={() => {
            addNote(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
