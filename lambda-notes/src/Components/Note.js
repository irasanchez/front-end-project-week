import React from "react";
import PropTypes from "prop-types";

const Note = props => {
  return (
    <section className="note-thumbnail">
      <h3>{props.title}</h3>
      <hr />
      <p>{props.content}</p>
    </section>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default Note;
