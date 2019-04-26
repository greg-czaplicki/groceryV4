import React, { Component } from "react";

import AddItemForm from "../AddItemForm";
import FetchDataContainer from "../FetchDataContainer";

class IncompleteContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <AddItemForm />
        <FetchDataContainer />
      </div>
    );
  }
}

export default IncompleteContainer;
