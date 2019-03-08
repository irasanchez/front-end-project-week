import React from "react";
import Nav from "../Components/Nav";
import ExpandedNote from "../Components/ExpandedNote";

class NoteView extends React.Component {
  constructor(props) {
    super(props);
  }
  // const editHandler = event => {
  //   console.log(event.target);
  // };

  // const deleteHandler = event => {
  //   console.log(event.target);
  // };
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <section className="views">
        <Nav />
        <ExpandedNote notes={this.props.notes} {...this.props} />
      </section>
    );
  }
}

export default NoteView;
