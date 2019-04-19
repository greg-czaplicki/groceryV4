import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

import { toggleItemComplete } from "../actions/itemActions";

const Item = ({ item, toggleItemComplete }) => {
  return (
    <ListItem button>
      <ListItemText onClick={() => toggleItemComplete(item)}>
        {item.name}
      </ListItemText>
      <Tooltip title="Edit Item" placement="left">
        <Fab
          color="primary"
          aria-label="Edit"
          size="small"
          component={Link}
          to={`/item/edit/${item._id}`}
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
