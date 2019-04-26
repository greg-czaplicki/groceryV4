import { Component } from "react";
import { connect } from "react-redux";

import { fetchCategoryNames } from "../actions/categoryActions";
import { fetchAllItems } from "../actions/itemActions";

class FetchData extends Component {
  async componentDidMount() {
    await this.props.fetchCategoryNames();
    await this.props.fetchAllItems();
  }

  render() {
    return null;
  }
}

export default connect(
  null,
  { fetchCategoryNames, fetchAllItems }
)(FetchData);
