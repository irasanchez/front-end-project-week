import React from "react";

class EditNote extends React.Component {
  constructor(props) {
    this.state = {
      title: this.props.title,
      textBody: this.props.textBody
    };
  }

  render() {
    return (
      <div className="editnote">
        <input />
        <input />
        <button>update</button>
      </div>
    );
  }
}

export default EditNote;
