import React, { Component } from "react";
import axios from "axios";

import ListView from "../Views/ListView";

import "../Styles/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  const URL = "https://fe-notes.herokuapp.com/note"

  componentDidMount() {
    axios
      .get(`${URL}/get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  }

  createNewNote = () => {
    axios
      .post(`${URL}/create`, note)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <ListView notes={this.state.notes} />
        <CreateNewView createNewNote={this.createNewNote} />
      </div>
    );
  }
}

export default App;
