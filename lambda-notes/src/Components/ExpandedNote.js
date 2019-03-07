import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import axios from "axios";

import { Link } from "react-router-dom";

const StyledExpandedNote = styled.section`
  width: 80%;
  display: flex;
  border: 1px solid black;
`;

const URL = "https://fe-notes.herokuapp.com/note";

class ExpandedNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: "",
        tags: [],
        textBody: "",
        title: ""
      },
      expandedNote: {}
    };
  }
  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      const expandedNote = this.props.notes.find(note => note._id === id);
      this.selectNote(id);
      this.setState({ expandedNote: expandedNote });
    }
    console.log(this.props);
  }

  selectNote = id => {
    axios
      .get(`${URL}/get/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <StyledExpandedNote className="expanded-note">
        <div className="actions">
          <Link to="/edit">edit</Link> //change to link
          <Link to="/delete">delete</Link>
        </div>
        <h2>{this.state.expandedNote.title}</h2>
        <p>{this.state.expandedNote.title}</p>
      </StyledExpandedNote>
    );
  }
}

export default ExpandedNote;
