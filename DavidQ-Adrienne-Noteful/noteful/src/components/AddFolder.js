import React from 'react';

export default function AddFolder(props) {
 return (
   <form onSubmit={(e)=>{
     e.preventDefault();
     props.addFolder(e.target.name.value);
     props.flip();
   }}>
     <label htmlFor="name">Name:</label>
     <input id="name" name="name" type="text" required/>
     <button type="submit">add folder</button>
   </form>
 )
}