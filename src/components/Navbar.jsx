

import React, { useEffect } from 'react';
import Logo from '../logo.png';
import { Link } from "react-router-dom"; // ✅ correct import

const Navbar = () => {

 useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarNavAltMarkup");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
            toggle: true,
          });
          bsCollapse.hide();
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={Logo} alt="Logo" width={100} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav text-white" id="navarrange">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <a className="nav-link" href="#product">Products</a>
            <a className="nav-link" href="#product">Services</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#contactme">Contact</a>
            <Link className="nav-link text-dark" to="/admin">Admin</Link>
            <a className="nav-link" href="/ourcert">Certification</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
