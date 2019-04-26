import React, { Component } from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IncompleteContainer from "./components/containers/IncompleteContainer";
import store from "./store";
import EditItem from "./components/EditItem";
import CompletedCategoryContainer from "./components/containers/CompletedCategoryContainer";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RecipeContainer from "./components/containers/RecipeContainer";
import NotFound from "./components/NotFound";

import myTheme from "./components/styles/theme";
import { MuiThemeProvider } from "@material-ui/core";
import "normalize.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <Provider store={store}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={IncompleteContainer} />
              <Route path="/item/edit/:id" component={EditItem} />
              <Route path="/completed" component={CompletedCategoryContainer} />
              <Route path="/recipes" component={RecipeContainer} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
