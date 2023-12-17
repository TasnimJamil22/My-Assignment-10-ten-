import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
 
import { Icon } from "@iconify/react";
import { text } from "@fortawesome/fontawesome-svg-core";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);
  return (
    <div>
      {/* <p>{id} gh</p> */}
      {/* <p>${serviceDetails.name}</p> */}

      <p>
        {serviceDetails[id] && (
          // {/* <p>{serviceDetails[id].name}</p> */}
         <div className="bg-info-subtle ">
            <h2 className="mt-5">{serviceDetails[id].name}</h2>
             <p className="mx-auto px-5" style={{maxWidth: '1040px'}}>View Details here.Any service is available.We are always here.We Listen to you.You just support you.Talk to us also you can take our paid services....</p>
          <div className="card mb-3 mx-auto  "   style={{maxWidth: '1540px'}}> 
          
          <div className="row g-0">
            <div className="col-md-4">
              <img src={serviceDetails[id].img} className="img-fluid rounded   " alt="..."/>
            </div>
            <div className="col-md-8 ">
              <div className="card-body bg-info-subtle ">
                <h4 className="card-title">{serviceDetails[id].name}</h4>
                <p className="card-text mx-5">{serviceDetails[id].details}</p>
                <h3 className="card-text"><small className="text-body-secondary">Price: ${serviceDetails[id].price}</small></h3>
                <Link to='/cart' className="btn" style={{backgroundColor:'#6DB9EF' }}>Order Now</Link>  
              </div>
            </div>
          </div>
        </div>
         </div>
        )}
      </p>
    </div>
  );
};

export default ServiceDetails;
