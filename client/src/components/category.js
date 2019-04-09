import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchItemsInCategory } from "../actions";

import Item from "./Item";

class Category extends Component {
  componentDidMount() {
    this.props.fetchItemsInCategory(this.props.category._id);
  }

  renderItems = () => {
    const results = this.props.items.find(
      item => item._id === this.props.category._id
    );

    if (!results) return <p>Loading...</p>;

    return results.items.map(item => <Item item={item} key={item._id} />);
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

const mapStateToProps = state => {
  return {
    items: state.itemsInCategory
  };
};

export default connect(
  mapStateToProps,
  { fetchItemsInCategory }
)(Category);
