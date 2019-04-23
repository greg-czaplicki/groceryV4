import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";
import App from "./App";
import EditItem from "./components/EditItem";
import CompletedCategoryContainer from "./components/CompletedCategoryContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeContainer from "./components/RecipeContainer";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

import "normalize.css";

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
    MuiBottomNavigation: {
      root: {
        backgroundColor: blue[500]
      }
    }
  }
});

const notFound = () => {
  return (
    <div>
      <h1>404 Page Not Found!</h1>
    </div>
  );
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/item/edit/:id" component={EditItem} />
          <Route path="/completed" component={CompletedCategoryContainer} />
          <Route path="/recipes" component={RecipeContainer} />
          <Route component={notFound} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
serviceWorker.register();
