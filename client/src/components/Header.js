import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 60
  },
  title: {
    textDecoration: "none",
    marginRight: 10
  }
};

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/"
          >
            Grocery List
          </Typography>
          <ShoppingCartIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
