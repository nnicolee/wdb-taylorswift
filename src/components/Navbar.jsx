import React, { useState } from "react";

const Navbar = () => {
  const [underlineColor, setUnderlineColor] = useState("pastelPurple"); // Default color

  const changeColor = () => {
    // Function to change color
    // Update this with your logic to change the color
    setUnderlineColor(
      underlineColor === "pastelPurple" ? "otherColor" : "pastelPurple"
    );
  };

  return (
    <nav className={`navbar ${underlineColor}`}>
      <ul className="nav-items">
        <li className="nav-item" onMouseOver={changeColor}>
          Home
        </li>
        <li className="nav-item" onMouseOver={changeColor}>
          About
        </li>
        <li className="nav-item" onMouseOver={changeColor}>
          Services
        </li>
        <li className="nav-item" onMouseOver={changeColor}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
