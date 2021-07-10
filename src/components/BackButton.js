import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import { NavLink } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="main-content">
      <NavLink to="/" exact>
        <Button>Back</Button>
      </NavLink>
    </div>
  );
};

export default BackButton;
