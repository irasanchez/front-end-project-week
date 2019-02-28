import React from "react";
import styled from "styled-components";

import Note from "./Note";

const StyledNotes = styled.section`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;

const Notes = props => {
  return (
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
  );
};

export default Notes;
