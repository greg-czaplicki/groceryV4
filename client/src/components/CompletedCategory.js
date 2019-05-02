import React from "react";

import CategoryContainer from "./containers/CategoryContainer"

import { connect } from "react-redux";

const Category = ({ items, category }) => {
  return ( 
    <CategoryContainer items={items} category={category}/>
   );
}


const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items.payload
      .filter(item => item.category === ownProps.category._id)
      .filter(item => item.isComplete)
  };
};

export default connect(mapStateToProps)(Category);