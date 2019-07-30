import React from 'react';
import Folder from './Folder';
import {NavLink} from 'react-router-dom';
import AddFolder from './AddFolder';
import SubmitError from './SubmitError';
import '../css/Nav.css'
export default class Navigation extends React.Component{
  state= {show:false};

flipShow = ()=>{
  this.setState(
    {show:false}
  )
}

render(){
  let folders = '';

if (this.props.folders) {folders = this.props.folders.map((folder,index)=>{
    return (
    <NavLink className="Nav" isActive={()=>window.location.pathname === "/folder/"+ folder.id }  key={index} to = {"/folder/"+ folder.id}>
    <Folder deleteFolder={this.props.deleteFolder} id={folder.id} name={folder.name}/>
    </NavLink>)
  });
}
  return (
    <div className="side-bar">
      {!this.props.folders && <button onClick={()=> this.props.history.goBack()}>Go Back</button>}
      {folders}
      <SubmitError>
  {!this.state.show && this.props.folders && <button onClick={()=>this.setState({show:!this.state.show})}>add Folder</button>}
      {this.state.show && <AddFolder addFolder = {this.props.addFolder} flip={this.flipShow}/>}
      </SubmitError>
    </div>
  )
  }
}