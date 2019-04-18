import React, { Component } from "react";

import Item from "./Item";

class CategoryContent extends Component {
  renderItems() {
    const { items } = this.props;
    if (!items) return <p>Loading...</p>;

    return items.map(item => <Item item={item} key={item._id} />);
  }

  renderCategoryName() {
    const { items, category } = this.props;
    if (items.length > 0) return <h3>{category.name}</h3>;
  }

  render() {
    return (
      <div>
        {this.renderCategoryName()}
        {this.renderItems()}
      </div>
    );
  }
}

export default CategoryContent;
