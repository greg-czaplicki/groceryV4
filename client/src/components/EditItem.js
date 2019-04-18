import React, { Component } from "react";

class EditItem extends Component {
  render() {
    return (
      <div>
        <h1>Edit Item</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default EditItem;
