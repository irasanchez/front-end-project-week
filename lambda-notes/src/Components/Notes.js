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
  width: 70%;
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

  render() {
    return (
      <FlexContainer className="views">
        <h2>Your Notes:</h2>
        <StyledNotes>
          {this.props.notes.map(n => (
            <Link to={`/note/${n._id}`} key={n._id}>
              <Note
                className="note-thumbnail"
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
