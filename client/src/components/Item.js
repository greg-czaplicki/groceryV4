import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { toggleItemComplete } from "../actions/itemActions";
import "./item.css";

class Item extends Component {
  render() {
    let classes = this.props.item.isComplete ? "complete" : null;
    return (
      <div>
        <h4
          onClick={() => this.props.toggleItemComplete(this.props.item)}
          className={classes}
        >
          {this.props.item.name}
        </h4>
        <Link to={`/item/edit/${this.props.item._id}`}>
          <span role="img" aria-label="Pencil">
            ✏️
          </span>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleItemComplete }
)(Item);
