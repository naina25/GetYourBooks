import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBook from "../AddBook";
import BooksList from "../BooksList";
import MainContent from "../MainContent";
import Title from "../Title";
import useLocalStorage from "../../Hooks/useLocalStorage";
import EditBook from "../EditBook";
import { Redirect } from "react-router";

export const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);
  return (
    <BrowserRouter>
      <div className="whole-content">
        <Title />
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route
            render={(props) => (
              <AddBook {...props} books={books} setBooks={setBooks} />
            )}
            path="/addbook"
          />
          <Route
            render={(props) => (
              <BooksList {...props} books={books} setBooks={setBooks} />
            )}
            path="/booklist"
          />
        </Switch>
        <Route
          render={(props) => (
            <EditBook {...props} books={books} setBooks={setBooks} />
          )}
          path="/edit/:id"
        />
        <Route component={() => <Redirect to="/" />} />
      </div>
    </BrowserRouter>
  );
};
