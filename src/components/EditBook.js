import React, { useContext } from "react";
import BooksForm from "./BookForm";
import { useParams } from "react-router-dom";
import BooksContext from "../context/BooksContext";

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id !== id);

  const handleSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/");
  };
  return (
    <div>
      <BooksForm book={bookToEdit} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditBook;
