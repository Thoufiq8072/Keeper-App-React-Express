import React from "react";
import ReactDom from "react-dom/client";
import "./Note.css";
import DeleteIcon from '@mui/icons-material/Delete';

function Note({noteContents, id, deleteNote}) {
  return (
    <div className="note">
      <h1>{noteContents.title}</h1>
      <p>{noteContents.content}</p>
      <button onClick={() => {
        deleteNote(id);
      }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
