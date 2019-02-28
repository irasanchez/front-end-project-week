import React from "react";
import Note from "./Note";

const Notes = props => {
  return (
    <section className="notes">
      {props.notes.map(n => (
        <Note notes={n} key={n._id} />
      ))}
    </section>
  );
};

export default Notes;
