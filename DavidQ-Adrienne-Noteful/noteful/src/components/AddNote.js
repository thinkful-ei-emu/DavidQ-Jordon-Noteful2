import React from 'react';
import noteContext from './noteContext';

export default function AddNote(props) {
 return (
   <noteContext.Consumer>{(context)=>(
   <div>
     <form onSubmit={(e)=>{
       e.preventDefault();
       context.addNotes(e.target.newNote.value,e.target.content.value, props.match.params.folderId);
       props.history.push('/');
      }}>
       <h3>Add New Note</h3>
       <label htmlFor="newNote">name: </label>
       <input id="newNote" name="newNote" type="text" placeholder="Note Name"></input><br/>
       <label htmlFor="content">content: </label>
       <input id="content" name="content" type="text" placeholder="Note content"></input>
      <br/>
       <button type="submit">Add</button>
     </form>
     
   </div>)
   }</noteContext.Consumer>
 )
}
/* AddNote.propTypes ={
 value: PropTypes.string.isRequired
}; */