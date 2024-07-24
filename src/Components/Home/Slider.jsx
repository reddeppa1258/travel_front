import React from "react";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import travel from "../Assets/travel.webp"
import gallary1 from "../Assets/gallery1.png"
import gallary2 from "../Assets/gallery2.jpg"
import gallary3 from "../Assets/gallery3.webp"
import gallary4 from "../Assets/gallery4.jpeg"
import gallary5 from "../Assets/gallery5.jpeg"
import gallary6 from "../Assets/gallery6.webp"
import gallary7 from "../Assets/gallery7.jpg"
import gallary8 from "../Assets/gallary8.jpeg"
import gallary9 from "../Assets/gallary9.jpg"
import gallary10 from "../Assets/gallery10.jpg"
import client1 from "../Assets/client1.webp"
import client2 from "../Assets/client2.webp" 



const Slider = () => {

    return (

        <>
            <div className="container slider">
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-danger">expreince</button>
                        <h1>With all our Expreince we will serve you</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit cumque nostrum, laborum cupiditate dolor corrupti? Quod quam accusamus deleniti.</p>
                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-danger">12k+</button>
                                <h6>Successful Trips</h6>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-danger">2k</button>
                                <h6>Regular Trips</h6>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-danger"> 15</button>
                                <h6>years of Expreince</h6>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6">
                        <img src={travel} alt="travel img" />
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="row">
                  <h5 className="gallery">gallery</h5>

                  <h1>Visit our Customers tour gallery</h1>
                  <div className="imggallary">
                  <img src={gallary1}  alt="gallary1"  className="gallary1"/>
                  <img src={gallary2}  alt="gallary2"  className="gallary1"/>
                  <img src={gallary3}  alt="gallary3" className="gallary1" />
                  <img src={gallary4}  alt="gallary4"  className="gallary1"/>
                  <img src={gallary5}  alt="gallary5"  className="gallary1"/>
                  <img src={gallary6}  alt="gallary6" className="gallary1"/>
                  <img src={gallary7}  alt="gallary7" className="gallary1" />
                  <img src={gallary8}  alt="gallary8" className="gallary1"/>
                  <img src={gallary9}  alt="gallary9" className="gallary1"/>
                  <img src={gallary10}  alt="gallary10" className="gallary1" />
                  </div>

                </div>

            </div>
            <div className="container">
                <button className="buttonclient">Clients love</button>
                <h1>What our Clients say about us </h1>
                <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={client2} alt="client2" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={client1} alt="img1"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={client2} alt="client2" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </div>

            
        </>
    )
}
export default Slider