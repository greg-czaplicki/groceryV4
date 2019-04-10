import React, { Component } from "react";
import { connect } from "react-redux";

import { addNewItem } from "../actions/categoryActions";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddItemForm extends Component {
  state = {
    name: "",
    category: "",
    categoryId: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onAddItem = e => {
    e.preventDefault();
    this.props.addNewItem({
      name: this.state.name,
      category: this.state.category
    });
    this.setState({
      name: "",
      category: "",
      categoryId: ""
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        onSubmit={this.onAddItem}
        className={classes.container}
        autoComplete="off"
      >
        <TextField
          id="name"
          label="Item Name"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          className={classes.textField}
        />

        <TextField
          id="category"
          select
          label="Category"
          helperText="Please select the item's category"
          margin="normal"
          onChange={this.handleChange("category")}
          value={this.state.category}
          className={classes.textField}
        >
          {this.props.categories.map(category => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Add Item
        </Button>
      </form>
    );
  }
}

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

export default connect(
  null,
  { addNewItem }
)(withStyles(styles)(AddItemForm));
