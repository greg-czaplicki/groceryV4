import React, { Component } from "react";

import { getCategories } from "./api/categories";
import Category from "./components/category";

class App extends Component {
  state = {
    categories: []
  };

  async componentDidMount() {
    const { data: categories } = await getCategories();
    const result = categories.filter(category => category.items.length > 0);
    this.setState({
      categories: result
    });
  }

  renderCategories = () => {
    return this.state.categories.map(category => (
      <Category key={category._id} category={category} />
    ));
  };

  render() {
    return (
      <div>
        <h1>Grocery V4</h1>
        {this.renderCategories()}
      </div>
    );
  }
}

export default App;
