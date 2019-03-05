import React from "../../node_modules/react";

import CreateNewNote from "../Components/CreateNewNote";
import Nav from "../Components/Nav";
import View from "../Styles";

const CreateNewView = props => {
  return (
    <View id="createnewview">
      <Nav />
      <CreateNewNote createNewNote={props.createNewNote} />
    </View>
  );
};

export default CreateNewView;
