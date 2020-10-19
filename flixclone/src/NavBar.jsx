import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://i.pinimg.com/564x/1f/41/f0/1f41f01769219a40f837861852b1afb2.jpg"
        alt="user logo"
      />
    </div>
  );
};

export default NavBar;
