import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledNote = styled.section`
  width: 30%;
  height: 100px;
  margin: 5px;
  background-color: white;
  border: 1px solid gray;
`;

const Note = props => {
  return (
    <StyledNote>
      <h3>{props.title}</h3>
      <hr />
      <p>{props.content}</p>
    </StyledNote>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default Note;
