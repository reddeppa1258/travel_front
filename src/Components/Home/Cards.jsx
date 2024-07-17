import React  from "react";
import useFetch from "../Hooks/useFetch";
import { BASE_URL } from "../utilities/Confiig";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../Home/Home.css"

const Cards = () => {
    const {data:blogData,loading,error} = useFetch(`${BASE_URL}/tour/gettours`
    
);
    console.log("home comp",blogData);

    return (
        <>
        {loading && <h1>loading</h1>}
            {error && <h1>error</h1>}
            {!loading && !error && (
                <div className="container">
                     <div className="card-body ">
                    <div className="row">
                        {blogData?.Tour?.map((item) => (
                            
                               
                               <div className="col-md-3 m-2  layout">
                              
                                 <img src={item.img} className="img" />
                                 <h5>location:{item.location}</h5>
                                 <h6>{item.heading}</h6>
                                 <h6>price:{item.price}</h6>
                                 <Link to={item._id}>
                                 <button type="submit">read more</button>
                                 </Link>
                                
                             
                            </div>
                            
                        ))}

</div>
</div>
                </div>
            )}
        </>

    );
};

export default Cards;