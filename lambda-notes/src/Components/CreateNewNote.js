import React from "react";
import axios from "axios";

const URL = "https://fe-notes.herokuapp.com/note";

class CreateNewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${URL}/create`, this.state)
      .then(response =>
        this.setState({ success: response.data.success, error: "" })
      )
      .catch(error => this.setState({ success: "", error: error }));

    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Note Title"
          name="title"
        />
        <input
          type="text"
          value={this.state.textBody}
          onChange={this.handleChange}
          placeholder="Note Content"
          name="textBody"
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default CreateNewNote;
