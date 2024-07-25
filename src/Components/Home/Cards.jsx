import React from "react";
import useFetch from "../Hooks/UseFetch";
import { BASE_URL } from "../utilities/Confiig";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./cards.css";

const Cards = () => {
  const {
    data: blogData,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tour/gettours`);
  console.log("home comp", blogData);

  return (
    <>
      {loading && <h1>loading</h1>}
      {error && <h1>error</h1>}
      {!loading && !error && (
        <div className="container">
          <div className="crad-container">
            {blogData?.Tour?.map((item) => (
              // <div className="col-md-3 m-2  layout">
              //   <Link to={`/tourblog/${item._id}`}>
              //     <img src={item.img} className="img" />
              //     <h5>location:{item.location}</h5>
              //     <h6>{item.heading}</h6>
              //     <h6>price:{item.price}</h6>
              //   </Link>
              // </div>
              <div className="card" key={item._id}>
                <Link className="link" to={`/tourblog/${item._id}`}>
                  <img src={item.img} alt="Card image" className="card-img" />
                  <div className="card-content">
                    <h2 className="card-title">{item.location}</h2>
                    <p className="card-text">{item.heading}</p>
                    <p className="card-btn">{item.price}/Per person</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
