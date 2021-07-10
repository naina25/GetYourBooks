import React from "react";
import BackButton from "./BackButton";
import BookForm from "./BookForm";

const AddBook = ({ history, books, setBooks }) => {
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
