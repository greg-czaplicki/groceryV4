const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginTop: 100,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(960 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

export default styles;
