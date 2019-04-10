import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategoryNames } from "./actions/categoryActions";
import Category from "./components/Category";
import AddItemForm from "./components/AddItemForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchCategoryNames();
  }

  renderCategories = () => {
    return this.props.categories.map(category => (
      <Category key={category._id} name={category.name} id={category._id} />
    ));
  };

  handleAddItem = item => {
    console.log(item);
  };

  render() {
    return (
      <div>
        <h1>Grocery V4</h1>
        <AddItemForm
          onAddItem={this.handleAddItem}
          categories={this.props.categories}
        />
        {this.renderCategories()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  { fetchCategoryNames }
)(App);
