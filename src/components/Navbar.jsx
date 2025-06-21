import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

import "./Navbar.css";

export default function Navbar({ cart, setData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <img
              src={logo}
              alt=""
              style={{ height: 60, width: 190, borderStartEndRadius: 40 }}
            />

            <ul className="navbar-nav me-auto mb-2 ps-5 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form
              onSubmit={handleSubmit}
              style={{ width: "40vw" }}
              className="d-flex ps-5"
              role="search"
            >
              <input
                className="form-control me-4"
                type="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Elctronics product"
                aria-label="Search"
              />
            </form>
            <Link to="/login">
              {" "}
              <button className="btn btn-outline-primary" type="submit">
                Login
              </button>
            </Link>
            <Link to={"/cart"}>
              <button
                type="button"
                className="btn btn-primary position-relative mx-5"
              >
                <BsCart4 style={{ fontSize: "2rem" }} />
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-primary border border-light rounded-circle">
                  {cart.length}
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
