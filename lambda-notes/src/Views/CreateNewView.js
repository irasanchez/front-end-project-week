import React from "../../node_modules/react";

import CreateNewNote from "../Components/CreateNewNote";
import Nav from "../Components/Nav";

const CreateNewView = props => {
  return (
    <section className="createnew views">
      <Nav />
      <CreateNewNote createNewNote={props.createNewNote} />
    </section>
  );
};

export default CreateNewView;
