import React from 'react';
import { Route } from 'react-router-dom';
//--------------->components
import noteContext from './components/noteContext';
import List from './components/List';
import Navigation from './components/Navigation';
import Main from './components/Main';
import NotePage from './components/NotePage';
import Api from './components/Api';
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
      })
  }

  deleteNote = (noteId) => {
    Api.doFetch('notes', noteId, 'DELETE')
      .then(() => this.setState({
        notes: this.state.notes.filter((target) => target.id !== noteId)
      }))
  }

  render() {
    return (
      <>
        <header className='App-header'>
          <h1>Noteful</h1>
        </header>
        <main className="container">
          <div className='col'>
            <Route exact path="/" render={(props) => { return <Navigation {...props} folders={this.state.folders} /> }} />
            <Route path="/folder/:folderId" render={(props) => { return <Navigation {...props} folders={this.state.folders} /> }} />
            <Route path='/note/:noteId' component={Navigation} />
          </div>
          <div className='col-3'>
            <noteContext.Provider value={{ notes: this.state.notes }}>
              <Route exact path="/" render={(props) => { return <Main {...props} notes={this.state.notes} /> }} />
              <Route path="/folder/:folderId" render={(props) => {
                return <List {...props} folderId={props.match.params.folderId} />
              }} />

              <Route path="/note/:noteId" render={(props) => {
                return <NotePage {...props} notes={this.state.notes.find((note) => {
                  return note.id === props.match.params.noteId
                })} />
              }} folderId={this.state.notes.folderId} />
            </noteContext.Provider>
            <Route path="/" Component={Error} />
          </div>
        </main>
      </>
    )
  }
}
