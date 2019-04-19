import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import pink from "@material-ui/core/colors/pink";

import store from "./store";
import App from "./App";
import EditItem from "./components/EditItem";
import CompletedCategoryContainer from "./components/CompletedCategoryContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "normalize.css";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: pink,
    secondary: {
      main: "#fff176"
    }
  },
  overrides: {
    MuiBottomNavigationAction: {
      label: {
        color: "#ff9790",
        fontSize: 12,
        "&$selected": {
          color: "#fff",
          fontSize: 13
        }
      }
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: pink[500]
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
          <Route component={notFound} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
