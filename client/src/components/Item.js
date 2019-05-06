import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

import { toggleItemComplete } from "../actions/itemActions";

import "./styles/item.css"

const Item = ({ item, toggleItemComplete }) => {

  let classes = "";
  classes += (item.isComplete) ? "complete" : null;

  return (
    <ListItem button style={{ height: 57 }} className={classes}>
      <ListItemText onClick={() => toggleItemComplete(item)}>
        {item.name} {item.quantity > 1 ? <span>- {item.quantity}</span> : null}
      </ListItemText>
      <Tooltip title="Edit Item" placement="left">
        <Fab
          color="primary"
          aria-label="Edit"
          size="small"
          component={Link}
          to={`/item/edit/${item._id}`}
          disabled={item.isComplete}
        >
          <EditIcon />
        </Fab>
      </Tooltip>
    </ListItem>
  );
};

export default connect(
  null,
  { toggleItemComplete }
)(Item);
