import React, { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import "../Header/Header.css"

import { AuthContext } from "../Context/authContext";

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  console.log(user)
  const navigate = useNavigate()

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
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
              {user ? (
              <>
               
                <div><h5 className="username">{user?._doc?.username?.substring(0,1)?.toUpperCase()}</h5></div>
                <h6 className="logout" onClick={logout}>Logout</h6>
              </>
            ) : (
              <>
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
              </>
            )}
              {/* <li class="nav-item">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/register" class="nav-link">
                  Register
                </Link> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};
export default Header;
