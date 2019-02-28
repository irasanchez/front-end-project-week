import React from "react";

const Note = props => {
  return (
    <section className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </section>
  );
};

export default Note;
