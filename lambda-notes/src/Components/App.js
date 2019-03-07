import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import ListView from "../Views/ListView";
import CreateNewView from "../Views/CreateNewView";
import NoteView from "../Views/NoteView";
// import EditView from '../Views/EditView';

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
        {/* NoteView */}
        <Route
          path={`/note/:id`}
          render={props => <NoteView {...props} notes={this.state.notes} />}
        />
        {/* ListView */}
        {/* <ListView notes={this.state.notes} /> */}
        <Route
          exact
          path={`/`}
          render={props => <ListView {...props} notes={this.state.notes} />}
        />

        {/* CreateView */}
        <CreateNewView />
      </div>
    );
  }
}

export default App;
