import React from "react";
import EditNote from "../Components/EditNote";
import Nav from "../Components/Nav";
import "../Styles/index.css";

const EditView = props => {
  return (
    <div className="editview views">
      <Nav />
      <div>
        <h2>Edit Note:</h2>
        <EditNote notes={props.notes} {...props} />
      </div>
    </div>
  );
};

export default EditView;
