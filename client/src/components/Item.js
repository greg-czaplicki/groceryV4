import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { toggleItemComplete } from "../actions/itemActions";
import "./item.css";

const Item = ({ item, toggleItemComplete }) => {
  let classes = item.isComplete ? "complete" : null;

  return (
    <div>
      <h4 onClick={() => toggleItemComplete(item)} className={classes}>
        {item.name}
      </h4>
      <Link to={`/item/edit/${item._id}`}>
        <span role="img" aria-label="Pencil">
          ✏️
        </span>
      </Link>
    </div>
  );
};

export default connect(
  null,
  { toggleItemComplete }
)(Item);
