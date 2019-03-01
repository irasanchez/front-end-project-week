import React from "../../node_modules/react";

import CreateNewNote from "../Components/CreateNewNote";
import Nav from "../Components/Nav";

const CreateNewView = props => {
  return (
    <div className="createnewview">
      <Nav />
      <CreateNewNote createNewNote={props.createNewNote} />
    </div>
  );
};

export default CreateNewView;
