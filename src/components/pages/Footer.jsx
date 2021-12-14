import React from "react";

const Footer = () => {
  return (
    <nav
      className="navbar navbar-dark bg-primary"
      style={{ marginTop: "21.5vh" }}
    >
      <span className="text-center mx-auto">
        Sebastian Ariel Allende - &copy; {new Date().getFullYear()}
      </span>
    </nav>
  );
};

export default Footer;
