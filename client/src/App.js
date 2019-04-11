import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "./components/Category";
import { fetchCategoryNames } from "./actions/categoryActions";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchCategoryNames();
  }

  renderCategories = () => {
    const { categories } = this.props;
    return categories.map(category => (
      <Category key={category._id} category={category} />
    ));
  };

  render() {
    return this.props.isFetching ? <p>Loading...</p> : this.renderCategories();
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    isFetching: state.categories.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchCategoryNames }
)(App);
