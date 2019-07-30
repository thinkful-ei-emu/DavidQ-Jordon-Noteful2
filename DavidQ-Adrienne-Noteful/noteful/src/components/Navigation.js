import React from 'react';
import Folder from './Folder';
import {NavLink} from 'react-router-dom';
import '../css/Nav.css'
export default function Navigation(props) {

let folders = '';

if (props.folders) {folders = props.folders.map((folder,index)=>{
    return (
    <NavLink className="Nav" isActive={()=>window.location.pathname === "/folder/"+ folder.id }  key={index} to = {"/folder/"+ folder.id}>
    <Folder deleteFolder={props.deleteFolder} id={folder.id} name={folder.name}/>
    </NavLink>)
  });
}
 return (
   <div className="side-bar">
     {!props.folders && <button onClick={()=> props.history.goBack()}>Go Back</button>}
     {folders}
     {props.folders && <button onClick={(e)=>{props.addFolder(prompt('Folder Name:'))}}>add Folder</button>}
   </div>
 )
}
