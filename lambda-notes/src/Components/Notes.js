import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Note from "./Note";

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

const Notes = props => {
  return (
    <FlexContainer className="views">
      <h2>Your Notes:</h2>
      <StyledNotes>
        {props.notes.map(n => (
          <Note
            notes={n}
            key={n._id}
            title={n.title}
            tags={n.tags}
            content={n.textBody}
          />
        ))}
      </StyledNotes>
    </FlexContainer>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
};

export default Notes;
