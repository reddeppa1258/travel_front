import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";
import { BASE_URL, gettoken } from "../utilities/Confiig";
import "../tours/tour.css";
import { useState } from "react";

const Tourblog = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    phonenumber: "",
    date: "",
    persons: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = UseFetch(`${BASE_URL}/tour/singletour/${id}`);
  console.log(data);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // console.log("token.....",token)
    const token=gettoken()

    try {
      const response = await fetch(`${BASE_URL}/slot/booking/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ` + token,
        },
        body: JSON.stringify(credentials),
      });
      // console.log("tokenid",token)
      const result = await response.json();
      console.log(result);

      if (!result.ok) {
        console.log(result.message);
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 single">
            {/* {data && (
              <>
                <img src={data.tour.img} alt="img" className="simg" />
                <h4>{data.tour.location}</h4>
                <h5>{data.tour.heading}</h5>
                <h6>{data.tour.price}/per person</h6>
              </>
            )} */}
          </div>
          <div className="col-md-6 formb">
            <form onSubmit={handleClick}>
              <h4>Booking Form</h4>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="bookingform"
                onChange={handleChange}
                value={credentials.username}
              />
              <br />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phonenumber"
                className="bookingform"
                onChange={handleChange}
                value={credentials.phonenumber}
              />
              <br />
              <input
                type="date"
                placeholder="Select Date"
                name="date"
                className="bookingform"
                onChange={handleChange}
                value={credentials.date}
              />
              <br />
              <input
                type="number"
                placeholder="Enter No. of Persons"
                name="persons"
                className="bookingform"
                onChange={handleChange}
                value={credentials.persons}
              />
              <br />
              <button type="submit" className="btn btn-danger">
                Book Your Tour
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourblog;
