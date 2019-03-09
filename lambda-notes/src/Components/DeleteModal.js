import React from "react";

const URL = "https://fe-notes.herokuapp.com/note";

class DeleteModal extends React.Component {
  constructor(props) {
    this.state = {};
  }

  deleteMessage = () => {
    axios
      .delete(`${URL}/note/delete/:id`)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="delete-container">
        <div className="delete-modal">
          <p>Are you sure you want to delete this?</p>
          <div className="confirm">
            <button>yes</button>
            <button>no</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
