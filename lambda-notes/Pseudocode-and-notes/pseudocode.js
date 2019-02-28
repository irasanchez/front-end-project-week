/*
Pseudocode and other notes

 ************************* 
 *************************
 
- dependencies
-- yarn add reactstrap bootstrap
-- yarn add prop-types
-- yarn add react-router-dom
-- yarn add styled-components


 *************************
- App.js
-- pass props
--- notes={this.state.notes}
--- views rendered here based on certain user input conditions

*************************

-Nav.js
-- rendered in views not App.js for styling
-- NavLink View Your Notes 
--- Opens ListView
-- NavLink + Create New Note
--- 


************************* 

- ListView.js
-- Rendered in App.js
-- use NavLink for display toggle
-- Contains Nav.js and Notes.js side by side in a container

*************************

- Notes.js
-- rendered in ListView
-- functional component
-- takes props
-- returns list of Notes using map
-- Note needs key prop
-- add prop-types

 ************************* 

- Note.js
-- rendered in Notes
-- functional component
-- displays edit and delete links
-- displays note title and content 

import React from "react";

const Note = () => {
  return (
    <section className="note">
      <h2>Note Title</h2>
      make h2 dynamic 
      <p>Note Content</p>
      make p dynamic
    </section>
  );
};

*/
