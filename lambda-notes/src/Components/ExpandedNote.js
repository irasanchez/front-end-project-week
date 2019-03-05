import React from "react";
import styled from "styled-components";

const StyledExpandedNote = styled.div`
  width: 80%;
  display: flex;
  border: 1px solid black;
`;

const ExpandedNote = props => {
  return (
    <StyledExpandedNote className="expanded-note">
      <div className="actions">
        <button>edit</button>
        <button>delete</button>
      </div>
      <h2>Note Name</h2>
      <p>Note Content</p>
    </StyledExpandedNote>
  );
};

export default ExpandedNote;
