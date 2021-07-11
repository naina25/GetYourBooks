import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Book = ({
  id,
  bookName,
  author,
  price,
  quantity,
  date,
  handleRemove,
}) => {
  const history = useHistory();
  return (
    <Card style={{ width: "18rem" }} className="book">
      <Card.Body>
        <Card.Title classsName="book-title">{bookName}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity}</div>
          <div>Price: {price}</div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemove(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
