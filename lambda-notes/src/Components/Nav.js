import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <StyledButton className="button">View Notes</StyledButton>
      <Link to="/new">
        <StyledButton className="button">New Note</StyledButton>
      </Link>
    </StyledNav>
  );
};

export default Nav;
