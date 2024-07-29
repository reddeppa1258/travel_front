
import React from "react"
import { TbBrandBooking } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "../Footer/Footer.css"
import { Link } from "react-router-dom";




const Footer = () => {
    return (
        <div>
            <div className="container foot">
                <siv className="row">
                    <div className="col-md-3 footer">
                        <div>
                            <h3><TbBrandBooking />
                            Booking engine</h3>
                            <p>Lorem ipsum dolor<br></br> sit amet consectetur adipisicing<br></br> elit. Minus, fugit.</p>
                        <div className="icons">
                        <CgProfile size={30} />
                        <FaGithub size={30} />
                        <FaLinkedinIn size={30} />
                        <FaInstagram size={30} />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Discover</h3>
                        <div>
                           <Link to="/home"><h5>Home</h5></Link> 
                            <h5>About</h5>
                            <Link to="/tour"><h5>Tours</h5></Link> 
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Quik Links</h3>
                        <div>
                            <h5>Gallery</h5>
                            <Link to="/login">
                            <h5>Login</h5>
                            </Link>
                          <Link to="/register">
                          <h5>Register</h5>
                          </Link>
                           
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact</h3>
                        <div>
                            <h5> <CiLocationOn />Address:BTM , Banglore</h5>
                            <h5><MdOutlineMail />Email:Kreddeppa2@gmail.com</h5>
                            <h5><FaPhoneAlt />
                            Phone:6301899065</h5>
                        </div>
                    </div>

                </siv>
                <h5 className="copy">copyright2024,Design and develop by Reddeppa.All rights reserved</h5>
            </div>
        </div>
    )
}
export default Footer