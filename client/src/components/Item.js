import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import posed from "react-pose";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

import { toggleItemComplete } from "../actions/itemActions";

const Swipeable = posed.div({
  draggable: "x",
  dragBounds: { right: 0 },
  dragEnd: {
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 250 }
  }
});

const Item = ({ item, toggleItemComplete }) => {
  return (
    <Swipeable
      onValueChange={{
        x: x => {
          if (x <= -180) toggleItemComplete(item);
        }
      }}
    >
      <ListItem button style={{ height: 57 }}>
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
    </Swipeable>
  );
};

export default connect(
  null,
  { toggleItemComplete }
)(Item);
