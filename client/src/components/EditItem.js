import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import Paper from "@material-ui/core/Paper";

import containerStyles from "./styles/container";

import {
  editItemInfo,
  fetchItemInfo,
  deleteItemFromList
} from "../actions/itemActions";

class EditItem extends Component {
  state = {
    _id: "",
    name: "",
    category: "",
    quantity: 1,
    isComplete: false
  };

  async componentDidMount() {
    await this.props.fetchItemInfo(this.props.match.params.id);

    this.setState({
      _id: this.props.item._id,
      name: this.props.item.name,
      category: this.props.item.category,
      isComplete: this.props.item.isComplete,
      quantity: this.props.item.quantity
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSliderChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleEditItem = e => {
    e.preventDefault();

    // create item object
    const item = {
      name: this.state.name,
      category: this.state.category,
      quantity: this.state.quantity,
      isComplete: this.state.isComplete
    };

    const id = this.state._id;
    // disptach edit item action
    this.props.editItemInfo(id, item);
    this.props.history.push("/");
  };

  handleDeleteItem = () => {
    this.props.deleteItemFromList(this.state._id);
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Paper style={{ padding: 40 }}>
          <form onSubmit={this.handleEditItem} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              fullWidth
              size="large"
            />

            <TextField
              id="standard-select-category"
              select
              label="Select"
              value={this.state.category}
              onChange={this.handleChange("category")}
              helperText="Please select a category"
              margin="normal"
              size="large"
              fullWidth
            >
              {this.props.categories.map(category => (
                <MenuItem
                  key={category._id}
                  value={category._id}
                  style={{ fontSize: 20 }}
                >
                  {category.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-quantity"
              label="Quantity"
              value={this.state.quantity}
              onChange={this.handleChange("quantity")}
              margin="normal"
              size="large"
              fullWidth
            />

            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.isComplete}
                    onChange={this.handleSliderChange("isComplete")}
                    value="isComplete"
                    style={{ marginTop: 30, marginBottom: 30 }}
                  />
                }
                label="Complete"
              />
            </FormGroup>

            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                style={{ marginTop: 30, marginBottom: 30 }}
              >
                Update Item
                <SaveIcon />
              </Button>

              <Button
                onClick={this.handleDeleteItem}
                variant="contained"
                size="large"
                fullWidth
                style={{ marginBottom: 30 }}
              >
                Delete Item
                <DeleteIcon />
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.payload,
    item: state.items.updateItem
  };
};

export default connect(
  mapStateToProps,
  { editItemInfo, fetchItemInfo, deleteItemFromList }
)(withStyles(containerStyles)(EditItem));
