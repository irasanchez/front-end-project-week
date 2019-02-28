import React from "react";
import Nav from "../Components/Nav";
import Notes from "../Components/Notes";

import styled from "styled-components";

const StyledListView = styled.div`
  display: flex;
`;

const ListView = props => {
  return (
    <StyledListView>
      <Nav />
      <Notes notes={props.notes} />
    </StyledListView>
  );
};

export default ListView;
