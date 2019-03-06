import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";

import { Link } from "react-router-dom";
import Note from "./Note";

const URL = "https://fe-notes.herokuapp.com/note";

const FlexContainer = styled.div`
  display: flex;
  padding: 50px 5%;
  border: 1px solid red;
`;

const StyledNotes = styled.section`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  text-overflow: ellipsis;
  font-size: 12px;
`;

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }
  componentDidMount() {
    console.log(this.props);
    const id = "5c7a457d2103f70015342779";
    this.selectNote(id);
  }

  selectNote = id => {
    console.log(id);
    axios
      .get(`${URL}/get/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  render() {
    return (
      <FlexContainer className="views">
        <h2>Your Notes:</h2>
        <StyledNotes>
          {this.props.notes.map(n => (
            <Link to={`/note/${n._id}`} key={n._id}>
              <Note
                notes={n}
                id={n._id}
                title={n.title}
                tags={n.tags}
                content={n.textBody}
              />
            </Link>
          ))}
        </StyledNotes>
      </FlexContainer>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
};

export default Notes;
