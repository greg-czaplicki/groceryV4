import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategoryItems } from "../actions/itemActions";
import Item from "./Item";

class Category extends Component {
  async componentDidMount() {
    const { category, fetchCategoryItems } = this.props;
    await fetchCategoryItems(category._id);
  }

  //TODO - Refactor to hide categories with no items
  renderItems() {
    const { items, isLoading } = this.props;
    if (isLoading || !items) return <p>Loading...</p>;

    return items.items.map(item => <Item item={item} key={item._id} />);
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

const mapStateToProps = (state, ownProps) => {
  const result = state.items.payload.find(
    category => category._id === ownProps.category._id
  );

  return {
    items: result,
    isLoading: state.items.isLoading
  };
};

export default connect(
  mapStateToProps,
  { fetchCategoryItems }
)(Category);
