import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const RecipeContainer = ({ classes }) => {
  return (
    <div className={classes.main}>
      <Typography variant="h4" align="center" className={classes.title}>
        Coming Soon...
      </Typography>
    </div>
  );
};

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(960 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default withStyles(styles)(RecipeContainer);
