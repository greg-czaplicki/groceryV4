import React, { Component } from "react";
import { connect } from "react-redux";

import Item from "./Item";
import { getCategoryItems } from "../api/categories";

class Category extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const result = await getCategoryItems(this.props.id);

    this.setState({
      items: result.data.items
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.newItem !== prevProps.newItem) {
      if (this.props.newItem.category === this.props.id) {
        this.setState({
          items: [...this.state.items, this.props.newItem]
        });
      }
    }
  }

  renderItems = () => {
    return this.state.items.map(item => <Item key={item._id} item={item} />);
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newItem: state.item
  };
};

export default connect(mapStateToProps)(Category);
