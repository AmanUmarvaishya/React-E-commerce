import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import './n.css'

export default function N() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <div>
      <div className="navbar-row">
        <div>
          <img
            src={logo}
            alt=""
            style={{ height: 60, width: 190, borderStartEndRadius: 40 }}
          />
        </div>
        <div>
          <ul>
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
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
        </div>
        <div>
          <form onSubmit={handleSubmit} style={{ width: "40vw" }} role="search">
            <input
              type="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Elctronics product"
            />
          </form>
        </div>
        <div>

          <Link to="/login">
            {" "}
            <button type="submit">Login</button>
          </Link>
      
            
        </div>
        <div>
             <Link to="/cart">
            {" "}
            <button type="submit">Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
