import React from "react";
// import PropTypes from "prop-types";
import axios from "axios";

import { Link } from "react-router-dom";

const URL = "https://fe-notes.herokuapp.com/note";

class ExpandedNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: "",
        tags: [],
        textBody: "",
        title: ""
      },
      expandedNote: {}
    };
  }
  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      const expandedNote = this.props.notes.find(note => note._id === id);
      this.selectNote(id);
      this.setState({ expandedNote: expandedNote });
    }
  }

  selectNote = id => {
    axios
      .get(`${URL}/get/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <section className="noteview expanded-note">
        <div className="actions">
          <Link to={`/note/:id/edit`}>edit</Link>
          <Link to={`/note/:id/delete`}>delete</Link>
        </div>
        <h2>{this.state.expandedNote.title}</h2>
        <p>{this.state.expandedNote.title}</p>
      </section>
    );
  }
}

export default ExpandedNote;
