import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "./components/Category";
import AddItemForm from "./components/AddItemForm";
import { fetchCategoryNames } from "./actions/categoryActions";
import { fetchALLItems } from "./actions/itemActions";

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
    return (
      <div>
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
)(App);
