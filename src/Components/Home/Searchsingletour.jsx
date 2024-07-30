import React from "react";
import UseFetch from "../Hooks/UseFetch";
import { BASE_URL } from "../utilities/Confiig";
import { Link, useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const Seachsingletour = () => {
  const { id } = useParams();

  const {
    data: blogData,
    loading,
    error,
  } = UseFetch(`${BASE_URL}/tour/singletour/${id}`);
  console.log("blog-Data", blogData);

  return (
    <div>
      <div>
        {loading && <p>Loading...</p>}

        {blogData?.tour?._id ? (
          <div className="crad1-container">
            <div className="card1">
              <Link className="link" to={`/tourblog/${blogData?.tour?._id}`}>
                <img
                  src={blogData?.tour?.img}
                  alt="Card image"
                  className="card1-img"
                />
                <div className="card1-content">
                  <h2 className="card1-title">{blogData?.tour?.location}</h2>
                  <p className="card1-text">{blogData?.tour?.heading}</p>
                  <p className="card1-btn">
                    {blogData?.tour?.price}/Per person
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
            <h1>sorry</h1>
            <p>no trips found</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Seachsingletour;
