import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "./components/Category";
import AddItemForm from "./components/AddItemForm";
import { fetchCategoryNames } from "./actions/categoryActions";
import { fetchAllItems } from "./actions/itemActions";

import withStyles from "@material-ui/core/styles/withStyles";
import containerStyles from "./components/styles/container";
import { SyncLoader } from "react-spinners";
import { Typography } from "@material-ui/core";

class AppCopy extends Component {
  async componentDidMount() {
    await this.props.fetchCategoryNames();
    await this.props.fetchAllItems();
  }

  renderCategories() {
    const { categories, isLoading } = this.props;

    if (isLoading)
      return (
        <span
          id="loader"
          style={{ textAlign: "center", display: "block", marginTop: 100 }}
        >
          <SyncLoader color={"#0081CB"} size={30} loading={isLoading} />
          <Typography variant="subtitle1" style={{ paddingTop: 20 }}>
            Loading...
          </Typography>
        </span>
      );

    return categories.map(category => (
      <Category category={category} key={category._id} />
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <AddItemForm categories={this.props.categories} />
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

export default connect(
  mapStateToProps,
  { fetchCategoryNames, fetchAllItems }
)(withStyles(containerStyles)(AppCopy));
