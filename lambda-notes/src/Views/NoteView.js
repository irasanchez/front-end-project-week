import React from "react";
import Nav from "../Components/Nav";
import ExpandedNote from "../Components/ExpandedNote";

import View from "../Styles";

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
      <View className="noteview">
        <Nav />
        <ExpandedNote notes={this.props.notes} />
      </View>
    );
  }
}

export default NoteView;
