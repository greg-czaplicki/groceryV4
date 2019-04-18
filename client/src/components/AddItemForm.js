import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { addItemToList } from "../actions/itemActions";

class AddItemForm extends Component {
  state = {
    name: "",
    category: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleAddItem = e => {
    e.preventDefault();

    // create item object
    const item = {
      name: this.state.name,
      category: this.state.category
    };
    // disptach add item action
    this.props.addItemToList(item);
    // reset form state
    this.setState({
      name: "",
      category: ""
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        onSubmit={this.handleAddItem}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
        />

        <TextField
          id="standard-select-category"
          select
          label="Select"
          value={this.state.category}
          onChange={this.handleChange("category")}
          helperText="Please select a category"
          margin="normal"
        >
          {this.props.categories.map(category => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>

        <Button type="submit" variant="contained" color="secondary">
          Add Item
        </Button>
      </form>
    );
  }
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  }
};

export default connect(
  null,
  { addItemToList }
)(withStyles(styles)(AddItemForm));
