import React from "react";
import BackButton from "./BackButton";
import BookForm from "./BookForm";
import BooksContext from "../context/BooksContext";
import { useContext } from "react";

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleSubmit = (book) => {
    setBooks([...books, book]);
    history.push("/booklist");
  };
  return (
    <>
      <BackButton />
      <div className="form-content">
        <BookForm handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default AddBook;
