import React, { useState } from "react";
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

  const [currentpage, setCurrentpage] = useState(1);
  const itemsperpage = 6;
  // const totalPages = Math.ceil(blogData?.Tour?.length / item?sperpage);

  const currentData = blogData?.Tour?.slice(
    (currentpage - 1) * itemsperpage,
    currentpage * itemsperpage
  );

  return (
    <>
      {loading && <h1>loading</h1>}
      {error && <h1>error</h1>}
      {!loading && !error && (
        <div className="container">
          <div className="crad-container">
            {currentData?.map((item) => (
              <div className="card" key={item?._id}>
                <Link className="link" to={`/tourblog/${item?._id}`}>
                  <img src={item?.img} alt="Card image" className="card-img" />
                  <div className="card-content">
                    <h2 className="card-title">{item?.location}</h2>
                    <p className="card-text">{item?.heading}</p>
                    <p className="card-btn">{item?.price}/Per person</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div>
            {[1, 2].map((num) => (
              <button
                className="btn btn-primary mx-3 my-3 "
                onClick={() => {
                  setCurrentpage(num);
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
