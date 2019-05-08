import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategoryNames } from "../../actions/categoryActions";
import { fetchAllItems } from "../../actions/itemActions";
import IsLoading from "../IsLoading";
import Category from "../Category";
import CompletedCategory from "../CompletedCategory"

import withStyles from "@material-ui/core/styles/withStyles";
import containerStyles from "../styles/container";

class GroceryContainer extends Component {

  async componentDidMount() {
    await this.props.fetchCategoryNames();
    await this.props.fetchAllItems();
  }

  renderCategoryType = (typeOfCategory) => {
    if (typeOfCategory === "Category") {
      return this.props.categories.map(category => (
        <Category category={category} key={category._id} />
      ))
    } else {
      return this.props.categories.map(category => (
        <CompletedCategory category={category} key={category._id} />
      ))
    }
  }

  render() {
    const { categories, isLoading, classes, categoryType, children } = this.props;
    return (
      <div className={classes.main}>
        {(children) ? React.cloneElement(children, { categories: categories }) : null}
        {isLoading ? <IsLoading /> : this.renderCategoryType(categoryType)}
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

export default connect(mapStateToProps, { fetchAllItems, fetchCategoryNames })(
  withStyles(containerStyles)(GroceryContainer)
);
