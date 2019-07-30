import React from 'react';
import '../css/note.css';
import noteContext from './noteContext';

export default function Note(props) {


  return (
    <noteContext.Consumer>{(context)=>(
    <div className="note col-full container">
      <div className="col-center">
      <p>{props.name}</p>
      <p>Date modified on {new Date(props.modified).toUTCString()}</p>
      </div>
      <button className="col-center" onClick={(e) =>{
        e.preventDefault();
        e.stopPropagation();
        context.deleteNote(props.id)
        props.history.push('/');
        }}>Delete</button>
    </div>
  )}
    </noteContext.Consumer>)

}

// return <Note key={index} name={note.name} id={note.id} modified={note.modified} folderId={note.folderId} />