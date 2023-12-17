import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const { id, name, img , details } = service;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mx-auto py-2">
      {/* <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-dark  btn-sm">Buy</button>
        </div>
      </div> */}
      {/* gggg */}
      <CardGroup>
      <Card className="rounded-4 h-auto ">
        <div className="inner">
        <Card.Img variant="top" src={img} className="rounded-4 " />
        </div>
        <Card.Body>
          <Card.Title> {name}</Card.Title>
          
          {/* <p>{details}</p> */}
          <p style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{details}</p>
           
        </Card.Body>
         
        <Link to={`/serviceDetails/${id}`}><button className="btn  btn-success mb-3">View Details</button></Link>
         
        
      </Card>
      
      </CardGroup>
    </div>
  );
};

export default Service;
