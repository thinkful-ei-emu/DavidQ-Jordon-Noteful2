import React from 'react';
import Note from './Note';

export default function NotePage(props) {
  console.log(props.match);
 return (
   <div className='col-full'>
     <h2>{props.note.name}</h2>
     <br/>
     <article>{props.note.content}</article>
  </div>
 )
}