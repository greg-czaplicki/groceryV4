import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import store from "./store";
import App from "./App";
import EditItem from "./components/EditItem";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "normalize.css";

const notFound = () => {
  return (
    <div>
      <h1>404 Page Not Found!</h1>
      <Link to="/">Go to homepage</Link>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/item/edit/:id" component={EditItem} />
        <Route component={notFound} />
      </Switch>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
