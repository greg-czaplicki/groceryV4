import React from "react";
import { connect } from "react-redux";
import CompletedCategory from "./CompletedCategory";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import containerStyles from "./styles/container";

const CompletedCategoryContainer = ({ categories, isLoading, classes }) => {
  const renderCategories = () => {
    if (isLoading) return <h3>Loading...</h3>;

    return categories.map(category => (
      <CompletedCategory category={category} key={category._id} />
    ));
  };

  return (
    <div className={classes.main}>
      <Typography
        variant="h4"
        align="center"
        className={classes.title}
        style={{ paddingBottom: 20 }}
      >
        Completed Items
      </Typography>
      {renderCategories()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories.payload,
    isLoading: state.categories.isLoading
  };
};

export default connect(mapStateToProps)(
  withStyles(containerStyles)(CompletedCategoryContainer)
);
