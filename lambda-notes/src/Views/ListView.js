import React from "react";
import Nav from "../Components/Nav";
import Notes from "../Components/Notes";

const ListView = props => {
  return (
    <div className="listview">
      <Nav />
      <Notes notes={props.notes} />
    </div>
  );
};

export default ListView;
