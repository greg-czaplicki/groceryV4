import React, { Component } from "react";

class Item extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.item.name} - {this.props.item.quantity}
      </div>
    );
  }
}

export default Item;
