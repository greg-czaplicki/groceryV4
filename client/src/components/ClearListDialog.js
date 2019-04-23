import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItemText from "@material-ui/core/ListItemText";

class ClearListDialog extends Component {
  state = {
    password: ""
  };

  handleOnChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleOnSubmit = () => {
    if (this.state.password === "greg") {
      this.props.handleDialogClose();
    } else {
      alert("The password is incorrect. Please try again.");
    }
  };

  render() {
    return (
      <div>
        <ListItemText
          variant="outlined"
          color="primary"
          onClick={this.props.handleDialogOpen}
        >
          Clear Grocery List
        </ListItemText>
        <Dialog
          open={this.props.dialogOpen}
          onClose={this.props.handleDialogClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Clear Grocery List?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the password to clear the current grocery list.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={this.handleOnChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOnSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ClearListDialog;
