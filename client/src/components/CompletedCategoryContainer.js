import React, { Component } from "react";
import { connect } from "react-redux";
import CompletedCategory from "./CompletedCategory";

class CompletedCategoryContainer extends Component {
  state = {};

  renderCategories() {
    const { categories, isLoading } = this.props;

    if (isLoading) return <h3>Loading...</h3>;

    return categories.map(category => (
      <CompletedCategory category={category} key={category._id} />
    ));
  }

  render() {
    return (
      <div>
        <h1>Completed Container</h1>
        {this.renderCategories()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.payload,
    isLoading: state.categories.isLoading
  };
};

export default connect(mapStateToProps)(CompletedCategoryContainer);
