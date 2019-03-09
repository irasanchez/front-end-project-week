import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const URL = "https://fe-notes.herokuapp.com/note/";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.getNote(id);
    this.setState({ id: id });
  }

  getNote = id => {
    axios
      .get(`${URL}get/${id}`)
      .then(response => console.log("getId", response))
      .catch(error => console.log(error));
  };

  deleteMessage = id => {
    axios
      .delete(`${URL}delete/${id}`)
      .then(response => {
        console.log("deleteMessage", this.state.id);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="delete-container">
        <div className="delete-modal">
          <p>Are you sure you want to delete this?</p>
          <div className="confirm">
            <Link to={`/note/delete/${this.props.match.params.id}`}>
              <button onClick={this.deleteMessage(this.state.id)}>
                delete
              </button>
            </Link>
            <button>no</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
