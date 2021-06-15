import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  const setBackground = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setBackground);

    return () => {
      window.removeEventListener("scroll", setBackground);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-bg"}`}>
      <img
        className="nav-logo"
        src="https://dlskits.com/wp-content/uploads/2018/05/Dream-League-Soccer-Barcelona-Logo.png"
        alt="Logo"
      />
      <img
        className="nav-avatar"
        src="http://www.zooniverse.org/assets/simple-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Navbar;
