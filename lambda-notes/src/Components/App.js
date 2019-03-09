import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import ListView from "../Views/ListView";
import CreateNewView from "../Views/CreateNewView";
import NoteView from "../Views/NoteView";
import EditView from "../Views/EditView";

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
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        {/* ListView */}
        <Route
          exact
          path={`/`}
          render={props => <ListView {...props} notes={this.state.notes} />}
        />

        {/* NoteView */}
        <Route
          exact
          path={`/note/:id`}
          render={props => <NoteView {...props} notes={this.state.notes} />}
        />

        {/* CreateView */}
        <Route
          exact
          path={`/note/create`}
          render={props => (
            <CreateNewView {...props} notes={this.state.notes} />
          )}
        />

        {/* EditView */}
        <Route
          exact
          path={`/note/edit/:id`}
          render={props => <EditView {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
