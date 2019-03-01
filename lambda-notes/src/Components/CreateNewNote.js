import React from "react";

class CreateNewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: "",
      newNoteContent: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    this.props.createNewNote(state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.newNoteTitle}
          onChange={this.handleChange}
          placeholder="Note Title"
          name="newNoteTitle"
        />
        <input
          type="text"
          value={this.state.newNoteContent}
          onChange={this.handleChange}
          placeholder="Note Content"
        />
        <button>Save</button>
      </form>
    );
  }
}

export default CreateNewNote;
