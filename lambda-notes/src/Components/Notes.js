import React from "react";
import Note from "./Note";

const Notes = props => {
  return (
    <section className="notes">
      {props.notes.map(n => (
        <Note
          notes={n}
          key={n._id}
          title={n.title}
          tags={n.tags}
          content={n.textBody}
        />
      ))}
    </section>
  );
};

export default Notes;
