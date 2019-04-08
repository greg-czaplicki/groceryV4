import React, { Component } from "react";

class Item extends Component {
  state = {};

  render() {
    const { item } = this.props;
    return (
      <div>
        <p>{item.name}</p>
      </div>
    );
  }
}

export default Item;
