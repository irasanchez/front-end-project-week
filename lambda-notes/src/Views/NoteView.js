import React from "react";
import Nav from "../Components/Nav";
import ExpandedNote from "../Components/ExpandedNote";

import View from "../Styles";

const NoteView = props => {
  const editHandler = event => {
    console.log(event.target);
  };

  const deleteHandler = event => {
    console.log(event.target);
  };

  return (
    <View className="noteview">
      <Nav />
      <ExpandedNote />
    </View>
  );
};

export default NoteView;
