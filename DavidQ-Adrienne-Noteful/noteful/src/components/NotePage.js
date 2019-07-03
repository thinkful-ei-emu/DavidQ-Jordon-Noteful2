import React from 'react';
import Note from './Note';

export default function NotePage(props) {
  console.log(props.match);
 return (
   <div className='col-full'>
  <Note {...props} name={props.notes.name} modified={props.notes.modified} id={props.notes.id}/>
  {props.notes.content}
  </div>
 )
}