import React from 'react';
import { Route } from 'react-router-dom';
//--------------->components
import noteContext from './components/noteContext';
import List from './components/List';
import Navigation from './components/Navigation';
import Main from './components/Main';
import NotePage from './components/NotePage';
import Api from './components/Api';
import AddNote from './components/AddNote';
//--------------CSS
import './css/grid.css';
import Error from './components/Error';
import './App.css';

export default class App extends React.Component {
  state = {
    folders: [],
    notes: []
  }

  componentDidMount() {
    Promise.all([
      Api.doFetch('folders'),
      Api.doFetch('notes')
    ])
      .then(data => {
        this.setState({
          folders: data[0],
          notes: data[1]
        })
      }).catch((error)=>{
        alert(error.message);
      });
  }

  deleteNote = (noteId) => {
    Api.doFetch('notes', noteId, 'DELETE')
      .then(() => {
        this.setState({
        notes: this.state.notes.filter((target) => target.id !== noteId)
      });

    }).catch((error)=>{
      alert(error.message);
    });
  }
  addNote =(name,content,folderId) =>{
    Api.doFetch('folders',folderId,'POST',JSON.stringify({name,content}))
    .then((res)=>{
      this.setState({
        notes: [...this.state.notes, res]
      })
    }).catch(console.log);
  }
  addFolder = (name)=>{
    Api.doFetch('folders','','POST',JSON.stringify({name}))
      .then(res=>{
        this.setState({
          folders: [...this.state.folders, res[0]]
        })
      }).catch(console.log);
  }

  render() {
    return (
      <>
        <header className='App-header'>
          <h1>Noteful</h1>
        </header>
        <main className="container">
          <div className='col'>
            <Route exact path="/" render={(props) => { return <Navigation {...props} addFolder={this.addFolder} folders={this.state.folders} /> }} />
            <Route path="/folder/:folderId" render={(props) => { return <Navigation {...props} addFolder={this.addFolder} folders={this.state.folders} /> }} />
            <Route path='/note/:noteId' component={Navigation} />
          </div>
          <div className='col-3'>
            <noteContext.Provider value={{ notes: this.state.notes, deleteNote:this.deleteNote, addNotes:this.addNote }}>
              <Route exact path="/" render={(props) => { return <Main {...props} notes={this.state.notes} /> }} />
              <Route path="/folder/:folderId" render={(props) => {
                return (<div><AddNote/><List {...props} notes={this.state.notes.filter((note)=>String(note.folder_id) === window.location.pathname.split('/')[2])} folderId={props.match.params.folderId} /></div>)
              }} />
              <Route path="/note/:noteId" render={(props) => {
                return <NotePage {...props} note={this.state.notes.find((note) => {
                  return String(note.id) === props.match.params.noteId
                }) || {name:'invalid note'}} />
              }} folderId={this.state.notes.folderId} />
            </noteContext.Provider>
            <Route path="/" Component={Error} />
          </div>
        </main>
      </>
    )
  }
}
