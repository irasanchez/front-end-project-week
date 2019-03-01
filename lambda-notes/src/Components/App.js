import React, { Component } from "react";
import axios from "axios";

import ListView from "../Views/ListView";
import CreateNewView from "../Views/CreateNewView";

import "../Styles/index.css";
const URL = "https://fe-notes.herokuapp.com/note";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      success: "",
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get(`${URL}/get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <ListView notes={this.state.notes} />
        <CreateNewView />
      </div>
    );
  }
}

export default App;
