import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBook from "../AddBook";
import BooksList from "../BooksList";
import MainContent from "../MainContent";
import Title from "../Title";
import useLocalStorage from "../../Hooks/useLocalStorage";

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
      </div>
    </BrowserRouter>
  );
};
