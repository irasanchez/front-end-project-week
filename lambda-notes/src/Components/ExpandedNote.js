import React from "react";
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
    console.log(this.props.match);
    if (this.props.match) {
      const id = this.props.match.params.id;
      const expandedNote = this.props.notes.find(note => note._id === id);
      this.getNote(id);
      this.setState({ expandedNote: expandedNote });
    }
  }

  getNote = id => {
    axios
      .get(`${URL}/get/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log("expanded note", error));
  };

  render() {
    return (
      <section className="noteview expanded-note">
        <div className="actions">
          <Link to={`/note/edit/${this.props.match.params.id}`}>edit</Link>
          <Link to={`/note/delete/${this.props.match.params.id}`}>delete</Link>
        </div>
        <h2>{this.state.expandedNote.title}</h2>
        <p>{this.state.expandedNote.textBody}</p>
      </section>
    );
  }
}

export default ExpandedNote;
