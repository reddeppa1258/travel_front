import React, { useState } from "react";
import "../Register/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utilities/Confiig";
import { Navigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";

const Register = () => {
  const [data, setData] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(data);
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(response);
      const result = await response.json();
      if (!result.ok) {
        console.log(result.message);
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="card-body">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <img src="https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=612x612&w=0&k=20&c=Fnx06haU4IHYLcRpy9Po_TBknvBqVjicGuUWkGu8e6Y=" alt="registerimg" className="rimg" />
          </div>
          <div className="col-md-4 registered ">
            <form onSubmit={handleClick}>
             <h1 ><IoMdPerson  className="icon"/></h1>
              <h1 className="regis">Register</h1>
              <input
                type="text"
                placeholder=" User name"
                name="username"
                onChange={handleChange}
                className="mt-3 input"
              />
              <br></br>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="mt-3 input"
              />
              <br></br>
              <input
                type="number"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="mt-3 input"
              />
              <br></br>
              <button type="submit" className="btn btn-primary mt-3 input">
                Create Account
              </button>
              <p>
                Already have an account <Link to="/login">Login</Link>{" "}
              </p>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};
export default Register;
