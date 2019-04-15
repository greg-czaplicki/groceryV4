import React, { Component } from "react";
import { connect } from "react-redux";

import Category from "./components/Category";
import AddItemForm from "./components/AddItemForm"
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
    return (
      <div>
        <AddItemForm categories={this.props.categories} />
        {this.props.isFetching ? <p>Loading...</p> : this.renderCategories()}
      </div>
    );
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
