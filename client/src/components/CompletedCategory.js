import React, { Component } from "react";
import { connect } from "react-redux";

import Item from "./Item";

class CompletedCategory extends Component {
  //TODO - Refactor to hide categories with no items
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

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items.payload
      .filter(item => item.category === ownProps.category._id)
      .filter(item => item.isComplete)
  };
};

export default connect(mapStateToProps)(CompletedCategory);
