import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Note from "./Note";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }

  render() {
    return (
      <section className="listview">
        <h2>Your Notes:</h2>
        <div className="notes-grid">
          {this.props.notes.map(n => (
            <Link
              to={`/note/${n._id}`}
              key={n._id}
              style={{ textDecoration: "none" }}
            >
              <Note
                className="note-thumbnail"
                notes={n}
                id={n._id}
                title={n.title}
                tags={n.tags}
                content={n.textBody}
              />
            </Link>
          ))}
        </div>
      </section>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
};

export default Notes;
