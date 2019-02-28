import React from "react";
import styled from "styled-components";

import Note from "./Note";

const StyledNotes = styled.section`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Notes = props => {
  return (
    <FlexContainer>
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

export default Notes;
