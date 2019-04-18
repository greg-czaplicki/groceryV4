import React, { Component } from "react";
import { connect } from "react-redux";

import CategoryContent from "./CategoryContent";

class CompletedCategory extends Component {
  render() {
    return (
      <CategoryContent
        items={this.props.items}
        category={this.props.category}
      />
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
