import React from "react";
import "./header.css";
import { BsFillTelephoneMinusFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="containerblue">
      <div className="phoneicondiv">
        <BsFillTelephoneMinusFill />
      </div>
      <div className="container header_container text-light">
        <h1 className="text-light">Simple Phonebook App</h1>
        <h5>By Akinjide Akinyanmi</h5>
      </div>
    </header>
  );
};

export default Header;
