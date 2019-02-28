import React from "react";
import styled from "styled-components";

const StyledNote = styled.section`
  width: 30%;
  height: 100px;
  background-color: white;
  border: 1px solid gray;
`;

const Note = props => {
  return (
    <StyledNote>
      <h2>{props.title}</h2>
      <hr />
      <p>{props.content}</p>
    </StyledNote>
  );
};

export default Note;
