import React from "react";
import { connect } from "react-redux";

import CategoryContent from "./CategoryContent";

const Category = ({ items, category }) => {
  return <CategoryContent items={items} category={category} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items.payload
      .filter(item => item.category === ownProps.category._id)
      .filter(item => !item.isComplete)
  };
};

export default connect(mapStateToProps)(Category);
