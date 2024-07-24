import React from "react";
import "../Tour/tourpage.css"
import { BASE_URL } from "../utilities/Confiig";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import tourist from "../Assets/male-tourist.png"
const Tour = ()=>{

    const {
        data: blogData,
        loading,
        error,
      } = useFetch(`${BASE_URL}/tour/gettours`);
      console.log("home comp", blogData);

    return(
        <div>
         <div className="herotour">
          <h1 className="head"> ALL Tours</h1>

         </div>
         <div className="tourcard">
         {loading && <h1>loading</h1>}
      {error && <h1>error</h1>}
      {!loading && !error && (
        <div className="container">
          
            <div className="row">
              {blogData?.Tour?.map((item) => (
                <div className="col-md-3 m-2  layouttour">
                  <Link to={`/tourblog/${item._id}`}>
                    <img src={item.img} className="imgtour" />
                    <h5>location:{item.location}</h5>
                    <h6>{item.heading}</h6>
                    <h6>price:{item.price}</h6>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        
      )}
         </div>

         <div className="  subscribe">
            <div className=" row sub">
                <div className="col-md-6">
            <h1 className="h1">Subscribe now for usefull<br></br> travelling information</h1>
            <input type="email" placeholder=" Enter Your Email" className="email"  /> <button className="subbutton">Subscribe</button>
           <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Fuga nam repellendus iste debitis iusto suscipit excepturi<br></br> neque beatae quas voluptatem.</p>
            
           </div>
           <div className="col-md-6">
            <img className="subimage" src= {tourist} alt="subimg" />

           </div>
           </div>
         </div>
        </div>
    )
}
export default Tour