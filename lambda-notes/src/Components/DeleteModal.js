import React from "react";

class DeleteModal extends React.Component {
  constructor(props) {
    this.state = {};
  }

  render() {
    return (
      <div className="delete-modal">
        <p>Are you sure you want to delete this?</p>
        <div className="confirm">
          <button>yes</button>
          <button>no</button>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
