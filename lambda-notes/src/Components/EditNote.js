import React from "react";
import axios from "axios";

const URL = "https://fe-notes.herokuapp.com/note/";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: this.props.title,
      textBody: this.props.textBody
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getNote(id);
    this.setState({ id: id });
  }

  getNote = id => {
    axios
      .get(`${URL}get/${id}`)
      .then(response =>
        this.setState({
          title: response.data.title,
          textBody: response.data.textBody
        })
      )
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  showUpdatedList = () => {
    axios
      .get(`${URL}get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put(`${URL}edit/${this.state.id}`, this.state)
      .then(response => {
        this.setState({
          title: response.data.title,
          textBody: response.data.textBody
        });
        this.showUpdatedList();
        this.props.history.push("/");
      })
      .catch(error => console.log(error));

    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="editnote">
        <input
          name="title"
          className="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          name="textBody"
          className="textBody"
          value={this.state.textBody}
          onChange={this.handleChange}
        />
        <button className="submit">Update</button>
      </form>
    );
  }
}

export default EditNote;
