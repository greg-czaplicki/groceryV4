import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import containerStyles from "../styles/container";

const RecipeContainer = ({ classes }) => {
  return (
    <div className={classes.main}>
      <Typography variant="h4" align="center" className={classes.title}>
        Coming Soon...
      </Typography>
    </div>
  );
};

export default withStyles(containerStyles)(RecipeContainer);
