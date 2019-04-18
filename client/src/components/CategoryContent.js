import React, { Component } from "react";

import Item from "./Item";

class CategoryContent extends Component {
  renderItems() {
    const { items } = this.props;
    if (!items) return <p>Loading...</p>;

    return items.map(item => <Item item={item} key={item._id} />);
  }

  render() {
    return (
      <div>
        <h2>{this.props.category.name}</h2>
        {this.renderItems()}
      </div>
    );
  }
}

export default CategoryContent;
