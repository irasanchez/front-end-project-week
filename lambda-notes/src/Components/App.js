import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import ListView from "../Views/ListView";
import CreateNewView from "../Views/CreateNewView";
import NoteView from "../Views/NoteView";
// import EditView from '../Views/EditView';
import ExpandedNote from "../Components/ExpandedNote";

import "../Styles/index.css";
const URL = "https://fe-notes.herokuapp.com/note";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      success: "",
      error: "",
      selected: false
    };
  }

  componentDidMount() {
    axios
      .get(`${URL}/get/all`)
      .then(response => {
        console.log(response.data);
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Route
          path={`/note/:id`}
          render={props => <ExpandedNote {...props} />}
        />
        <ListView notes={this.state.notes} />
        <CreateNewView />
        <NoteView notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
