import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "./components/Category";
import AddItemForm from "./components/AddItemForm";
import { fetchCategoryNames } from "./actions/categoryActions";
import { fetchALLItems } from "./actions/itemActions";

import withStyles from "@material-ui/core/styles/withStyles";
import containerStyles from "./components/styles/container";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchCategoryNames();
    await this.props.fetchALLItems();
  }

  renderCategories() {
    const { categories, isLoading } = this.props;

    if (isLoading) return <h3>Loading...</h3>;

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
  { fetchCategoryNames, fetchALLItems }
)(withStyles(containerStyles)(App));
