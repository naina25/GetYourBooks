import _ from "lodash";
import React from "react";
import BackButton from "./BackButton";
import Book from "./Book";

const BooksList = ({ books, setBooks }) => {
  const handleRemove = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <>
      <div className="book-list">
        <BackButton />
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemove={handleRemove} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </>
  );
};

export default BooksList;
