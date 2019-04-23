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

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class SideDrawer extends React.Component {
  state = {
    right: false
  };

  toggleDrawer = open => () => {
    this.setState({
      right: open
    });
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
            <ListItemText primary={"Clear Grocery List"} />
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
          open={this.state.right}
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
