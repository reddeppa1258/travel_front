import React from "react";
import "../Home/Home.css";
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { RiGuideFill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";


const Service=()=>{

    return(

        <>
        <div >
            <div className="template"> 
            <div className="service-container">
              
                    <div className="serve">
                        <h6>what we serve</h6>
                        <h2>we offer our best services</h2>
                    </div>
                    <div className="serve">
                        <h1><LiaCloudSunRainSolid size={70} className="cloud" /></h1>
                        <h2>calculate wheather </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quia nisi dolore quaerat harum quas eos cupiditate voluptas nam saepe!</p>

                    </div>
                    <div className="serve">
                    <h1><RiGuideFill size={70} className="cloud" /></h1>
            
                        <h2>Best Tour Guide</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, debitis corrupti? At, repellat! Eum cum voluptatum quia officia sint. Autem?</p>

                    </div>
                    <div className="serve">
                    <h1>< CiSettings size={70} className="cloud" /></h1>
                        <h2>Custamization</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ratione nam non sed nulla quisquam ut minus aut corporis exercitationem?</p>
                    </div>
                </div>

            
                </div>
        </div>
        </>
    )
}
export default Service