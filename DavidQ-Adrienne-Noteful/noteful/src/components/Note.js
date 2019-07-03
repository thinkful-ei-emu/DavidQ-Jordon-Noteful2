import React from 'react';
import '../css/note.css';

export default function Note(props) {

  return (
    <div className="note col-full">
      <p>{props.name}</p>
      <p>Date modified on {new Date(props.modified).toDateString()}</p>
      <button onClick={() => props.deleteNote(props.id)}>Delete</button>
    </div>
  )

}

// return <Note key={index} name={note.name} id={note.id} modified={note.modified} folderId={note.folderId} />