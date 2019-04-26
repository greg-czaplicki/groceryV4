import React from "react";
import { connect } from "react-redux";

const Category = ({ items, category }) => {
  return <h1>{category.name}</h1>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items.payload
      .filter(item => item.category === ownProps.category._id)
      .filter(item => !item.isComplete)
  };
};

export default connect(mapStateToProps)(Category);
