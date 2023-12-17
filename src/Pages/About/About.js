import {
  faEnvelope,
  faHouseChimney,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Images/about.jpg";
import img2 from "../Images/imgAbout.avif";
import img3 from "../Images/imgAbout2.avif";

const About = () => {
  return (
    <div className="mx-lg-5 mx-sm-1    ">
      
        < div className="container pt-3 ">
          <div className="row inner">
             
            <img className="col-lg-4 col-md-12 col-sm-12 w-25  mx-auto rounded border border-success p-2 mb-2 border-opacity-25" src={img1}  alt="" />
            <img className="col-lg-4 col-md-12 col-sm-12 w-25  mx-auto rounded border border-success p-2 mb-2 border-opacity-25" src={img2}  alt="" />
            <img className="col-lg-4 col-md-12 col-sm-12 w-25  mx-auto rounded border border-success p-2 mb-2 border-opacity-25" src={img3}  alt="" />
             
            
          </div>
        </div>
        <div className="mx-5 text-start pt-3">
        <h2 style={{color:'#D3D5FD'}}>About Us</h2>

        <p style={{color:'#474A56'}}>
          Mindfulness started its journey in 2020 with the goal to redefine
          mental health care and become country’s top community-based
          organization dedicated to serving those suffering from physical and
          mental disorders. It has been working to flourish Bangladesh’s total
          healthcare ecosystem through advice, education, research and services
          in order to make healthcare more accessible and affordable.</p>
          <p style={{color:'#474A56'}}> It provides services both in rural and urban 
          areas of this country and is
          trying to create awareness about the importance of mental well-being
          among the people. Mindfulness believes in the social integration of
          mental health services and a gender-inclusive approach, and its
          programs and strategies are committed to promoting mental health
          awareness, removing social stigmas and ensuring the accessibility of
          mental health services via digital platforms whenever and wherever
          needed.</p>
          <p style={{color:'#474A56'}}> It thrives to work for healing many hearts and changing lives.
          As it is committed to bringing change, it keeps collaborating with
          researchers, practitioners, policy experts, legal advisers and other
          community leaders to provide the best comprehensive health care.</p>
          <p style={{color:'#474A56'}}> Every week Mindfulness provides 4 to 5 educational videos regarding physical
          and mental health on its Facebook page and YouTube channel to create
          awareness among people. Also it’s working with so many talented yet
          unrecognized doctors to serve top-notch service in every department.
          By creating doctors’ profiles it’s been successful in promoting those
          low profiled but highly qualified doctors. Team Mindfulness is
          diligently and continuously working towards achieving its goal of
          turning our society into a place where mental health will be given as
          much importance as physical health and mental illnesses will be fought
          with proper care and courage.
        </p>
      </div>
      <div className="mx-5 text-start pt-3">
        <h2 style={{color:'#D3D5FD'}}>Our Mission</h2>
        <p style={{color:'#474A56'}}>
          Mindfulness strives to serve health care services locally and
          globally. Its goal is to be easily accessible to everyone who needs
          health support, be it mental or physical. Moreover, it really wants to
          educate people about mental health, cure mental disorders, and achieve
          victory over mental illness.
        </p>
      </div>
      <div className="mx-5 text-start pt-3">
        <h2 style={{color:'#D3D5FD'}}>Contact Us</h2>
        <p style={{color:'#474A56'}}>
          We provide a broad range of services focused on building stronger,
          more capable and resilient children and young people. Our teams assist
          families and communities, addressing multiple and/or complex needs to
          help them safely care for and protect their children. Donations are
          essential to allow us to continue to provide vital, independent mental
          health & wellness programs to the community. Without your generous
          support this would not be possible. To make a donation please click
          the link below.
        </p>
      </div>

      <div className="p-2">
      <div className="container pt-5 my-4">
        <div className="row ">
          <div className="col-lg-4 col-md-12 col-sm-12 mx-auto border-end   border-secondary my-5">
            <FontAwesomeIcon icon={faHouseChimney} style={{color:'#D3D5FD', height:'60px'}}/>
            <h4 style={{color:'#D3D5FD'}}>Donate</h4>
            <p>Mindfulness is funded entirely by private contributions.</p>
            <Link style={{color:'#D3D5FD'}}>Click Here To Donate</Link>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mx-auto border-end  border-secondary my-5">
            <FontAwesomeIcon icon={faPhoneFlip} style={{color:'#D3D5FD', height:'60px'}}/>
            <h4 style={{color:'#D3D5FD'}}>Call Us</h4>
            <p>Mindfulness is funded entirely by private contributions.</p>
            <Link style={{color:'#D3D5FD'}}>+880-13369876</Link>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mx-auto border-end border-secondary my-5">
            <FontAwesomeIcon icon={faEnvelope} style={{color:'#D3D5FD', height:'60px'}}/>
            <h4 style={{color:'#D3D5FD'}}>Email Us</h4>
            <p>Mindfulness is funded entirely by private contributions.</p>
            <Link style={{color:'#D3D5FD'}}>mindfulness@gmail.com</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
