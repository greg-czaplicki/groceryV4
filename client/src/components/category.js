import React, { Component } from "react";

import { getCategoryItems } from "../api/categories";
import Item from "./item";

class Category extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const { data } = await getCategoryItems(this.props.category._id);
    this.setState({
      items: data.items
    });
  }

  renderItems = () => {
    return this.state.items.map(item => <Item item={item} key={item._id} />);
  };

  render() {
    return (
      <div>
        <h1>{this.props.category.name}</h1>
        {this.renderItems()}
      </div>
    );
  }
}

export default Category;
