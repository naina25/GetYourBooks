import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import MainContent from "../components/MainContent";
import Title from "../components/Title";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import { Redirect } from "react-router";
import BooksContext from "../context/BooksContext";

export const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);
  return (
    <BrowserRouter>
      <div className="whole-content">
        <Title />
        <BooksContext.Provider value={{ books, setBooks }}>
          <Switch>
            <Route component={MainContent} path="/" exact={true} />
            <Route component={AddBook} path="/addbook" />
            <Route component={BooksList} path="/booklist" />
            <Route component={EditBook} path="/edit/:id" />
          </Switch>
        </BooksContext.Provider>
      </div>
    </BrowserRouter>
  );
};
