import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <header className="main-content">
      <p>
        Welcome to GetYourBooks!! This is a book management system which
        maintains all the information about the books, their authors, price and
        much more. Come and explore it!!
      </p>
      <div className="link">
        <NavLink to="/booklist" className="link" activeClassName="active" exact>
          <button>Books List</button>
        </NavLink>
        <NavLink to="/addbook" className="link" activeClassName="active" exact>
          <button>Add Book</button>
        </NavLink>
      </div>
    </header>
  );
};

export default About;
