import React from "react";
import { connect } from "react-redux";
import CompletedCategory from "./CompletedCategory";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const CompletedCategoryContainer = ({ categories, isLoading, classes }) => {
  const renderCategories = () => {
    if (isLoading) return <h3>Loading...</h3>;

    return categories.map(category => (
      <CompletedCategory category={category} key={category._id} />
    ));
  };

  return (
    <div className={classes.main}>
      <Typography variant="h4" align="center" className={classes.title}>
        Completed Items
      </Typography>
      {renderCategories()}
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

const mapStateToProps = state => {
  return {
    categories: state.categories.payload,
    isLoading: state.categories.isLoading
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(CompletedCategoryContainer)
);
