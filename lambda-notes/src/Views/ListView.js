import React from "react";
import Nav from "../Components/Nav";
import Notes from "../Components/Notes";

const ListView = props => {
  return (
    <section className="views">
      <Nav />
      <Notes notes={props.notes} />
    </section>
  );
};

export default ListView;
