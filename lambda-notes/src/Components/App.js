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
  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <ListView notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
