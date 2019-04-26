import React, { Fragment } from "react";
import { connect } from "react-redux";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

import Item from "./Item";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    marginBottom: 20
  }
});

const Category = ({ items, category, classes }) => {
  const renderItems = () => {
    return items.map(item => (
      <Fragment key={item._id}>
        <Item item={item} className={classes.item} />
        <Divider />
      </Fragment>
    ));
  };

  const renderCategoryName = () => {
    if (items.length > 0)
      return (
        <Paper className={classes.root} elevation={5}>
          <Typography variant="h5" gutterBottom style={{ paddingLeft: 15 }}>
            {category.name}
          </Typography>
          <Divider />

          <List style={{ paddingBottom: 0, paddingTop: 0 }}>
            {renderItems()}
          </List>
        </Paper>
      );
  };

  return <Fragment>{renderCategoryName()}</Fragment>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items.payload
      .filter(item => item.category === ownProps.category._id)
      .filter(item => !item.isComplete)
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Category));
