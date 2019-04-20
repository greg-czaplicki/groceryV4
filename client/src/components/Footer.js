import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";

const styles = {
  root: {
    width: "100%",
    display: "inline-flex",
    justifyContent: "center",
    position: "fixed",
    left: 0,
    bottom: 0
  }
};

class Footer extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Items"
          style={{ color: "#fff" }}
        />
        <BottomNavigationAction
          component={Link}
          to="/completed"
          label="Completed Items"
          style={{ color: "#fff" }}
        />
        <BottomNavigationAction
          component={Link}
          to="/recipes"
          label="Recipes"
          style={{ color: "#fff" }}
        />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
