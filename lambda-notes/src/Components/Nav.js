import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 20%;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  /* remove this border later */
`;

const StyledButton = styled.button`
  width: 90%;
  background-color: seagreen;
`;

const Nav = () => {
  return (
    <StyledNav>
      <h1>Lambda Notes</h1>
      <StyledButton>View Notes</StyledButton>
      <StyledButton>New Note</StyledButton>
    </StyledNav>
  );
};

export default Nav;
