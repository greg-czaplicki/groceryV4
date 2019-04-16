import React, { Component } from "react";

class Item extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>{this.props.item.name}</h4>
      </div>
    );
  }
}

export default Item;
