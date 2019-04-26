import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategoryNames } from "../actions/categoryActions";
import { fetchAllItems } from "../actions/itemActions";
import IsLoading from "./IsLoading";
import Category from "./Category";

import withStyles from "@material-ui/core/styles/withStyles";
import containerStyles from "./styles/container";

class FetchData extends Component {
  async componentDidMount() {
    await this.props.fetchCategoryNames();
    await this.props.fetchAllItems();
  }

  render() {
    const { categories, isLoading, classes } = this.props;
    return (
      <div className={classes.main}>
        {this.props.children}
        {isLoading ? (
          <IsLoading />
        ) : (
          categories.map(category => <Category category={category} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.payload,
    items: state.items.payload,
    isLoading: state.categories.isLoading
  };
};

export default connect(
  mapStateToProps,
  { fetchCategoryNames, fetchAllItems }
)(withStyles(containerStyles)(FetchData));
