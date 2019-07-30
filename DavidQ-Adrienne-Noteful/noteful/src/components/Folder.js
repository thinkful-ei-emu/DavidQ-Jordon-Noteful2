import React from 'react';
import '../css/folder.css'
export default function Folder(props) {
 return (
   <div className="folder col-full">
     <h2>{props.name}</h2><button onClick={(e)=>{
       e.preventDefault();
       e.stopPropagation();
       props.deleteFolder(props.id);
     }}>delete</button>
   </div>
 )
}