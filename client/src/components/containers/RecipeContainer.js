import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import containerStyles from "../styles/container";

class RecipeContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <h1>Recipe Container</h1>
      </div>
    );
  }
}

export default withStyles(containerStyles)(RecipeContainer);
