import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //do we have this???
import { Form, Button } from "react-bootstrap";
import "../App.css";

const BookForm = (props) => {
  // state to store all the entries from Form.
  const [book, setBook] = useState({
    bookName: props.book ? props.book.bookName : "",
    author: props.book ? props.book.author : "",
    quantity: props.book ? props.book.quantity : "",
    price: props.book ? props.book.price : "",
    date: props.book ? props.book.date : "",
  });

  // state to store error messages after validating the form.
  const [errorMsg, setErrorMsg] = useState("");

  //destructuring the state book
  const { bookName, author, price, quantity } = book;

  // handling the form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Form Validations
    const values = [bookName, author, price, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const NewBook = {
        id: uuidv4(),
        bookName,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handleSubmit(NewBook); //why are we passing this newbook to addBook component.
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg : "> {errorMsg} </p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className="label">Book Name</Form.Label>
          <Form.Control
            className="input-control"
            autoComplete="off"
            type="text"
            name="bookName"
            value={bookName}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label className="label">Book Author</Form.Label>
          <Form.Control
            className="input-control"
            autoComplete="off"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label className="label">Quantity</Form.Label>
          <Form.Control
            className="input-control"
            autoComplete="off"
            type="text"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label className="label">Book Price</Form.Label>
          <Form.Control
            className="input-control"
            autoComplete="off"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
