import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Professional = ({ professional }) => {
  const { id, name, profession, degrees, details, img } = professional;
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mx-auto py-2 bg-light rounded-3">
      <CardGroup>
        <Card className="rounded-4">
          <div className="inner">
            <Card.Img variant="top" className="w-50" src={img} />
          </div>
          <Card.Body >
            <Card.Title> {name}</Card.Title>
            {/* <Card.Text>{details}</Card.Text> */}
           <small>
           <p>{profession}</p>
            <p>{degrees}</p>
           </small>
           <button className="btn btn-sm btn-light " style={{backgroundColor:'#D3D5FD'}}>Appointment</button>
          </Card.Body>
           
        </Card>
      </CardGroup>
       
    </div>
  );
};

export default Professional;
