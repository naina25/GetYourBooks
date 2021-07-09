import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header";
import AddBook from "../AddBook";
import BooksList from "../BooksList";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={BooksList} path="/" exact={true} />
            <Route component={AddBook} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
