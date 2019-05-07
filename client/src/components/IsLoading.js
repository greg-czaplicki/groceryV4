import React from "react";
import { SyncLoader } from "react-spinners";
import { Typography } from "@material-ui/core";

const IsLoading = () => {
  return (
    <span
      id="loader"
      style={{ textAlign: "center", display: "block", marginTop: 100 }}
    >
      <SyncLoader color={"#0081CB"} size={30} />
      <Typography variant="subtitle1" style={{ paddingTop: 20 }}>
        Loading...
      </Typography>
    </span>
  );
};

export default IsLoading;
