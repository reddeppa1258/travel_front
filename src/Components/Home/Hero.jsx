import React, { useState } from "react";
import { FcGlobe } from "react-icons/fc";
import "./search.css";
import beach from "../Assets/beach.jpg";
import street from "../Assets/street.jpg";
import waterfall from "../Assets/waterfall.mp4";
import { IoLocationOutline } from "react-icons/io5";
import { GiPathDistance } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BASE_URL } from "../utilities/Confiig";
import { Link } from "react-router-dom";
import { useSearchState } from "../Context/SearchContext";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const people = useSearchState();
  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    let query = "?";
    if (location) query += `location=${location}&`;
    if (distance) query += `distances=${distance}`;
    try {
      const response = await fetch(`${BASE_URL}/tour/searchtour${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data);

      console.log(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePeople = (e) => {
    setMaxPeople(e.target.value);
    people.setPeople(e.target.value);
  };

  return (
    <div>
      <div className="container hero">
        <div className="row">
          <div className="col-md-6">
            <span>
              <button className="button">know before you go</button>{" "}
              <FcGlobe size={40} />
            </span>
            <h1 className="header">
              Travelling opens the doors to creating{" "}
              <span className="heading">memories</span>
            </h1>
            <p className="para">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis natus in porro labore hic aut voluptatibus quis
              recusandae? Voluptatem, labore! Quod totam a, molestias deserunt
              quam tenetur ratione, dolor cupiditate ab excepturi corrupti hic
              corporis ipsam eaque. Nam nesciunt ea exercitationem earum eos
              aspernatur, vero temporibus distinctio sed magni itaque.
            </p>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <img src={beach} alt="beach" className="beach" />
              </div>
              <div className="col-md-4">
                <video className="video" controls>
                  <source src={waterfall} type="video/mp4" />
                </video>
              </div>
              <div className="col-md-4 street">
                <img src={street} alt="street" className="street" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container searchbar">
        <div className="row searchhero">
          <div className="col-md-2"></div>
          <div className="col-md-3 input">
            <IoLocationOutline size={50} className="locationid1" />
            <label className="lid">Location</label>
            <input
              type="search"
              placeholder="Where are you going?"
              className="inputer1"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col-md-3 input">
            <GiPathDistance size={50} className="locationid2" />
            <label>Distance</label>
            <input
              type="search"
              placeholder="Distance K/M"
              className="inputer2"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <div className="col-md-3 input">
            <MdPeople size={50} className="locationid3" />
            <label>Max People</label>
            <input
              type="search"
              placeholder="Max people"
              className="inputer3"
              value={maxPeople}
              onChange={(e) => handlePeople(e)}
            />
            <IoSearch className="iosearch" size={70} onClick={handleSearch} />
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div></div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="crad1-container">
          {results?.tour?.map((item) => (
            <div className="card1" key={item._id}>
              <Link className="link" to={`/tourblog/${item._id}`}>
                <img src={item.img} alt="Card image" className="card1-img" />
                <div className="card1-content">
                  <h2 className="card1-title">{item.location}</h2>
                  <p className="card1-text">{item.heading}</p>
                  <p className="card1-btn">{item.price}/Per person</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
