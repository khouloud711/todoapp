import React, { Component } from 'react';
import Note from './components/note'
import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      noteText: '',
      notes:[],

    }
  }

  updateNoteText(noteText){
    this.setState({ noteText: noteText.target.value })
  }

  deleteNote(index){
    let notesArray = this.state.notes;
    notesArray.splice(index, 1);
    this.setState({ notes: notesArray })
  }

  addNote(){
    if(this.state.noteText === ''){return }
  
    let notesArray = this.state.notes;
    notesArray.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      let notesArray = this.state.notes;
      notesArray.push(this.state.noteText);
      this.setState({ noteText: ''});
    }
  }

  render(){

    let notes = this.state.notes.map((val,key) => {
      return <Note key = {key} text = {val} 
              deleteMethod = { () => this.deleteNote(key) } />
    })

    return (
      <div className="container">
        
        <div className="header">React Todo Application</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>

        <input type="text" placeholder="you can write here.."
            ref={((input) => {this.textInput = input})}
            className="textInput"
            value={this.state.noteText}
            onChange={noteText => this.updateNoteText(noteText)}
            onKeyPress={this.handleKeyPress.bind(this)}
            />


      </div>
    );
  }
}
export default App;
