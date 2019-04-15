import React, { Component } from "react";
import { connect } from "react-redux";

import { addItemToCategory } from "../actions/categoryActions";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    const item = {
      name: this.state.name,
      category: this.state.category
    };
    this.props.addItemToCategory(item);

    this.setState({
      name: "",
      category: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleAddItem} noValidate autoComplete="off">
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

        <Button type="submit" variant="contained" color="primary">
          Add Item
        </Button>
      </form>
    );
  }
}

export default connect(
  null,
  { addItemToCategory }
)(AddItemForm);
