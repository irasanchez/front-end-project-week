import React from "react";
import Nav from "../Components/Nav";
import Notes from "../Components/Notes";

import View from "../Styles";

const ListView = props => {
  return (
    <View id="listview">
      <Nav />
      <Notes notes={props.notes} />
    </View>
  );
};

export default ListView;
