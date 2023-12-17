import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../Images/banner/img1.jpg";
import banner2 from "../../Images/banner/img2.jpg";
import banner3 from "../../Images/banner/img4.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner1}
            style={{ height: "400px" }}
            alt="First slide"
            
          />
          
          <Carousel.Caption>
            <div className="container">
              <div className="row">
              <div className="col-lg-6 col-sm-6 mr-4 border rounded p-3" >
               <button className="btn btn-light btn-sm mb-2 ">Appoinment</button><br />
               <button className="btn btn-light btn-sm mb-2">Enroll Course</button><br />
               <button className="btn btn-light btn-sm mb-2">R. Counseling</button>
              </div>
              <div className="col-lg-6 col-sm-6 ml-3 pl-5">
              <h3>Mindfulness</h3>
            <p>
              "Patience. A form of wisdom, patience demonstrates that we accept
              the fact that".
            </p>
              </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            style={{ height: "400px" }}
          />
          <Carousel.Caption>
          <div className="container">
              <div className="row">
              <div className="col-lg-6 col-sm-6 mr-4 border rounded p-3" >
               <button className="btn btn-light btn-sm mb-2 ">Appoinment</button><br />
               <button className="btn btn-light btn-sm mb-2">Enroll Course</button><br />
               <button className="btn btn-light btn-sm ">R. Counseling</button>
              </div>
              <div className="col-lg-6 col-sm-6 ml-3 pl-5">
              <h3>Acceptance....</h3>
              <p>
              “Accept yourself, love yourself, and keep moving forward. If you
              want to fly, you have to give up what weighs you down.” .
            </p>
              </div>
              </div>
            </div>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            style={{ height: "400px", width: "700px" }}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className="container">
              <div className="row">
              <div className="col-lg-6 col-sm-6 mr-4 border rounded p-3" >
               <button className="btn btn-light btn-sm mb-2 ">Appoinment</button><br />
               <button className="btn btn-light btn-sm mb-2">Enroll Course</button><br />
               <button className="btn btn-light btn-sm ">R. Counseling</button>
              </div>
              <div className="col-lg-6 col-sm-6 ml-3 pl-5">
              <h3>Trust Yourself...</h3>
              <p>Trust. Develop a basic trust with yourself and your feelings.</p>
              </div>
              </div>
            </div>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
