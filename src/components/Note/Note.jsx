import React from "react";
import ReactDom from "react-dom/client";
import "./Note.css";

function Note({noteContents, id, deleteNote}) {
  return (
    <div className="note">
      <h1>{noteContents.title}</h1>
      <p>{noteContents.content}</p>
      <button onClick={() => {
        deleteNote(id);
      }}>DELETE</button>
    </div>
  );
}

export default Note;
