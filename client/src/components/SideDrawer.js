import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography } from "@material-ui/core";

import ClearListDialog from "./ClearListDialog";

const styles = {
  list: {
    width: 250
  }
};

class SideDrawer extends React.Component {
  state = {
    right: false,
    dialogOpen: false
  };

  toggleDrawer = open => () => {
    this.setState({
      right: open
    });
  };

  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <Typography variant="h6" align="center">
          Settings:
        </Typography>
        <Divider />
        <List>
          <ListItem button key={"Add Category"}>
            <ListItemText primary={"Add Category"} />
          </ListItem>
          <ListItem button key={"Edit Category"}>
            <ListItemText primary={"Edit Category"} />
          </ListItem>
          <Divider />
          <ListItem button key={"Clear Grocery List"}>
            <ClearListDialog
              dialogOpen={this.state.dialogOpen}
              handleDialogClose={this.handleDialogClose}
              handleDialogOpen={this.handleDialogOpen}
            />
          </ListItem>
          <Divider />
          <ListItem button key={"Clear Recipes"}>
            <ListItemText primary={"Clear Recipes"} />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className="sideDrawer" style={{ marginLeft: "auto" }}>
        <MenuIcon onClick={this.toggleDrawer(true)} />

        <Drawer
          anchor="right"
          open={this.state.right || this.state.dialogOpen}
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideDrawer);
