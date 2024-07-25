import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";
import { BASE_URL, gettoken } from "../utilities/Confiig";
import "../tours/tour.css";
import { useState } from "react";
import Ratings from "./Ratings";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLocationPin } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

const Tourblog = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    phonenumber: "",
    date: "",
    persons: "1",
  });
  const [rating, setRating] = useState({
    comment: undefined,
  });
  const [ratings, setRatings] = useState(0);

  const handleRatings = (value) => {
    setRatings(value);
  };

  const { id } = useParams();
  const token = gettoken();
  const navigate = useNavigate();

  const { data } = UseFetch(`${BASE_URL}/tour/singletour/${id}`);
  console.log("singledata", data);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/slot/booking/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ` + token,
        },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (!result.ok) {
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangerating = (e) => {
    setRating((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(rating);

  const handleRating = async (e) => {
    const requestdata = { ...rating };
    requestdata.ratings = ratings;
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/review/giverating/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ` + token,
        },
        body: JSON.stringify(requestdata),
      });
      const resulting = await res.json();
      if (!resulting.ok) {
        console.log(resulting.message);
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const { data: reviewsdata } = UseFetch(
    `${BASE_URL}/review/locationreview/${id}`
  );
  console.log("reviews", reviewsdata);
  const totalreviews = reviewsdata?.review?.reduce(
    (acc, curr) => (acc += curr.ratings),
    0
  );
  console.log("total reviews", totalreviews);

  const averageReviews =
    reviewsdata?.review?.reduce(
      (acc, curr) => (acc += Number(curr.ratings)),
      0
    ) / reviewsdata?.review?.length;
  return (
    <div className="cont">
      <div className="container">
        <div className="row">
          <div className="col-md-7 single">
            {/* {data && (
              <>
              <div>
              <img src={data?.tour?.img} className="imgl" alt="img"/>
              </div>
             <div className="locationimg">
             <h2 className="headingtour">{data?.tour?.heading}</h2>
             <div className="disp">
             <p><FaLocationPin size={30} />{data?.tour?.location}</p>
             <p><TfiLocationPin size={30} />{data?.tour?.distance}K/M</p>
            <p>{data?.tour?.price}/per person</p>
             </div>
           <h2>Description</h2>
           <p>this is the description</p>

             </div>
               
              </>
            )} */}
            {data && (
              <>
                <div>
                  <img src={data?.tour?.img} className="imgl" alt="img" />
                </div>
                <div className="locationimg">
                  <h2 className="headingtour">{data?.tour?.heading}</h2>
                  <div className="disp">
                    <p>
                      <FaLocationPin size={30} />
                      {data?.tour?.location}
                    </p>
                    <p>
                      <TfiLocationPin size={30} />
                      {data?.tour?.distance} K/M
                    </p>
                    <p>{data?.tour?.price} / per person</p>
                  </div>
                  <h2>Description</h2>
                  <p>this is the description</p>
                </div>
              </>
            )}
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-3 formb">
            <form onSubmit={handleClick}>
              <h4>Booking Form</h4>
              <h6>{averageReviews}</h6>
              <div className="inpb">
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
              </div>
              <br />
              <div className="disprice">
                <h5>
                  {data?.tour?.price}X{credentials.persons} :
                  {(data?.tour?.price)}
                </h5>

                <h5>service charges: 10</h5>

                <h4>Total:{Number(data?.tour?.price)*Number(credentials.persons)+10}</h4>
              </div>
              <button type="submit" className=" btnn">
                Book Your Tour
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ratingss">
              <form onSubmit={handleRating}>
                <div className="ratingsclass">
                  <h2>Reviews({reviewsdata?.review?.length})</h2>
                  <Ratings rating={ratings} onClick={handleRatings} />
                </div>

                <br></br>
                <input
                  type="text"
                  placeholder="Give your comment"
                  name="comment"
                  className="comment"
                  onChange={handleChangerating}
                />
                <button className="btn btn-primary ratingbutton">submit</button>
              </form>
              <div className="revcol">
                {reviewsdata?.review?.map((item) => (
                  <div className="ratingflex" key={item._id}>
                    <h1 >
                      <BsPersonCircle size={30} />
                     <span className="ml-3"> {item.user.username}</span>
                    </h1>
                    <h4>{item.ratings}</h4>
                    <h6>{item.comment}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourblog;
