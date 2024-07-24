import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css"
const Header = () => {
  return (
    <>
    <div className="color">
      <nav class=" navbar navbar-expand-lg color" >
        <div class="container-fluid  ">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/home" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/tour" class="nav-link">
                  Tours
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/register" class="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};
export default Header;
