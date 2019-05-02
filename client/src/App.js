import React, { Component } from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GroceryContainer from "./components/containers/GroceryContainer";
import store from "./store";
import EditItem from "./components/EditItem";
import AddItemForm from "./components/AddItemForm"
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RecipeContainer from "./components/containers/RecipeContainer";
import NotFound from "./components/NotFound";
import FetchData from "./components/FetchData";

import myTheme from "./components/styles/theme";
import { MuiThemeProvider } from "@material-ui/core";
import "normalize.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <Provider store={store}>
          <FetchData />
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact render={() => <GroceryContainer categoryType={"Category"}><AddItemForm/></GroceryContainer>}/>
              <Route path="/item/edit/:id" component={EditItem} />
              <Route path="/completed" component={GroceryContainer}/>
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
