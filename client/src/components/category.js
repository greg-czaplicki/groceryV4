import React, { Component } from "react";
import { connect } from "react-redux";

import Item from "./Item";
import { fetchCategoryItems } from "../actions/categoryActions";

class Category extends Component {
  async componentDidMount() {
    const { category } = this.props;
    await this.props.fetchCategoryItems(category._id);
  }

  renderItems = () => {
    const items = this.props.items[this.props.category.name];
    if (!items) return <p>Loading...</p>;
    return items.map(item => <Item item={item} key={item._id} />);
  };

  render() {
    const { category } = this.props;
    return (
      <div>
        <h1>{category.name}</h1>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  };
};

export default connect(
  mapStateToProps,
  { fetchCategoryItems }
)(Category);
