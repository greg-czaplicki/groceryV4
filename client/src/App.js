import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategories, addNewItem } from "./actions";
import Category from "./components/Category";
import AddItemForm from "./components/AddItemForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategories = () => {
    return this.props.categories.map(category => (
      <Category key={category._id} category={category} />
    ));
  };

  handleAddItem = item => {
    this.props.addNewItem(item);
  };

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
  { fetchCategories, addNewItem }
)(App);
