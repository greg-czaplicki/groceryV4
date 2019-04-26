import blue from "@material-ui/core/colors/blue";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: blue,
    secondary: {
      main: blue[200]
    }
  },
  overrides: {
    MuiBottomNavigationAction: {
      label: {
        color: "#D5D5D5",
        fontSize: 18,
        textAlign: "center",

        "&$selected": {
          color: "#fff",
          fontSize: 20
        }
      }
    },
    MuiInputLabel: {
      formControl: {
        fontSize: 20
      }
    },
    MuiSelect: {
      selectMenu: {
        fontSize: 20
      }
    },
    MuiInputBase: {
      input: {
        fontSize: 20
      }
    },
    MuiButtonBase: {
      root: {
        height: 50
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: "1.15rem"
      }
    },
    MuiOutlinedInput: {
      root: {
        background: "#fff"
      }
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: blue[500]
      }
    }
  }
});

export default theme;
