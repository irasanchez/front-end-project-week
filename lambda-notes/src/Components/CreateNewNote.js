import React from "react";
import axios from "axios";

const URL = "https://fe-notes.herokuapp.com/note";

class CreateNewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      id: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${URL}/create`, this.state)
      .then(response => {
        this.setState({ success: response.data.success, error: "" });
        console.log(response.data);
      })
      .catch(error => {
        this.setState({ success: "", error: error });
      });

    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create New Note:</h2>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Note Title"
          name="title"
          className="title"
        />
        <textarea
          type="text"
          value={this.state.textBody}
          onChange={this.handleChange}
          placeholder="Note Content"
          name="textBody"
          className="textBody"
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default CreateNewNote;
