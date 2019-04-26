import React, { Component } from "react";
import { connect } from "react-redux";

import IsLoading from "../IsLoading";
import Category from "../CompletedCategory";

import withStyles from "@material-ui/core/styles/withStyles";
import containerStyles from "../styles/container";

class CompletedContainer extends Component {
  render() {
    const { categories, isLoading, classes } = this.props;
    return (
      <div className={classes.main}>
        {isLoading ? (
          <IsLoading />
        ) : (
          categories.map(category => (
            <Category category={category} key={category._id} />
          ))
        )}
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

export default connect(mapStateToProps)(
  withStyles(containerStyles)(CompletedContainer)
);
