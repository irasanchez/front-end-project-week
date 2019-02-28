import React from "react";
import styled from "styled-components";

const StyledNote = styled.section`
  width: 30%;
`;

const Note = props => {
  return (
    <StyledNote>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </StyledNote>
  );
};

export default Note;
