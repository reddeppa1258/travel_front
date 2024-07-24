import React from "react";
import { FcGlobe } from "react-icons/fc";
import "../Home/Home.css"
import beach from "../Assets/beach.jpg"
import street from "../Assets/street.jpg"
import waterfall from "../Assets/waterfall.mp4"
import { IoLocationOutline } from "react-icons/io5";
import { GiPathDistance } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Hero = () => {

    return (
        <div>

            <div className="container hero">
                <div className="row">
                    <div className="col-md-6">
                        <span><button className="button">know before you go</button> <FcGlobe size={40} />
                        </span>
                        <h1 className="header">Travelling opens the doors to creating <span className="heading">memories</span></h1>
                        <p className="para"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis natus in porro labore hic aut voluptatibus quis recusandae? Voluptatem, labore! Quod totam a, molestias deserunt quam tenetur ratione, dolor cupiditate ab excepturi corrupti hic corporis ipsam eaque. Nam nesciunt ea exercitationem earum eos aspernatur, vero temporibus distinctio sed magni itaque.</p>
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
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-3 input">
                    <IoLocationOutline size={50} className="locationid1" /> <label className="lid">Location</label>
                  <input  type="search" placeholder="where are you going?"  className="inputer1"  />   


                    </div>
                    <div className="col-md-3 input">
                    <GiPathDistance size={50} className="locationid2" /><label>Distance</label>
                        <input type="search" placeholder="Distance K/M" className="inputer2" /> 

                    </div>
                  
                    <div className="col-md-3 input"> 
                    <MdPeople  size={50} className="locationid3"/> <label>Max people</label>
                        <input type="search" placeholder="Max people" className="inputer3" /> 
                        <IoSearch className="iosearch" size={70} />
                        </div>
                      

                </div>
                <div className="col-md-1">

                </div>

            </div>


        </div>
    )
}

export default Hero
