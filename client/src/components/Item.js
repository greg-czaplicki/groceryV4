import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleItemComplete } from "../actions/itemActions";
import "./item.css";

class Item extends Component {
  render() {
    let classes = this.props.item.isComplete ? "complete" : "";
    return (
      <div>
        <h4
          onClick={() => this.props.toggleItemComplete(this.props.item)}
          className={classes}
        >
          {this.props.item.name}
        </h4>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleItemComplete }
)(Item);
