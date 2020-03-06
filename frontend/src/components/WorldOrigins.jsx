import React from "react";

class WorldOrigins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards
    };
  }

  render() {
    return <div>Welcome to world origins flash card!</div>;
  }
}

export default WorldOrigins;
