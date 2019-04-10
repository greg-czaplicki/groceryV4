import React, { Component } from "react";
import { connect } from "react-redux";

import { getCategoryNames } from "./actions/categoryActions";
import Category from "./components/Category";
import AddItemForm from "./components/AddItemForm";

class App extends Component {
  componentDidMount() {
    this.props.getCategoryNames();
  }

  renderCategories = () => {
    return this.props.categories.map(category => (
      <Category key={category._id} name={category.name} />
    ));
  };

  // handleAddItem = item => {
  //   this.props.addNewItem(item);
  // };

  render() {
    return (
      <div>
        <h1>Grocery V4</h1>
        <AddItemForm handleAddItem={this.handleAddItem} />
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
  { getCategoryNames }
)(App);
