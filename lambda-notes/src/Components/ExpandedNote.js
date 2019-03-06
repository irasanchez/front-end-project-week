import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import axios from "axios";

const StyledExpandedNote = styled.div`
  width: 80%;
  display: flex;
  border: 1px solid black;
`;

const URL = "https://fe-notes.herokuapp.com/note";

class ExpandedNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }
  componentDidMount() {
    console.log(this.props);
    if (this.props.match) {
      const id = this.props.match.params.id;
      this.selectNote(id);
    }
  }

  selectNote = id => {
    axios
      .get(`${URL}/get/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
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
  }
}

// ExpandedNote.propTypes = {
//   note: PropTypes.shape({
//     title: PropTypes.number.isRequired,
//     content: PropTypes.string.isRequired
//   })
// };

export default ExpandedNote;
