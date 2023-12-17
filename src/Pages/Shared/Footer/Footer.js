 
import { faLocation, faLocationDot, faPhone, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../Images/logo3.png";

const Footer = () => {
  return (
   <div style={{backgroundColor:'#D3D5FD'}}>
     <div className="container rounded mt-5" >
      <div className="row ">
        <div className="col-lg-4 text-start p-4">
          <img src={logo} className="w-50" alt="" />
          <h6>Mindfulness Center Limited </h6>
          <p style={{ fontSize: "15px" }}>
            Main Branch House # 44/9,
            <br /> Union Heights, Level # 6 & 14,
            <br /> West Panthapath, Dhaka-1205, <br /> Bangladesh.
          </p>
          </div>

        
        <div className="col-lg-2 text-start p-4">
           <p style={{ fontSize: "15px" }}>
            <FontAwesomeIcon icon={faLocationDot}/><br />
            Banani Branch House # 20,
            <br /> Road # 58, Block # F, <br /> Garden Center, Level # 1,
            Banani,
            <br /> Dhaka-1213, Bangladesh
          </p>
        </div>

        <div className="col-lg-2 text-start p-4">
        <p style={{ fontSize: "15px" }}>
           <FontAwesomeIcon icon={faPhone}/> 
             Ph:+88096757577 ,<br /> +56563322255 <br />  mindfulness32@gmail.com
          </p>
          <p style={{ fontSize: "15px" }}>© 2022 Mindfulness. All Rights Reserved</p>
        </div>

        <div className="col-lg-4 text-start p-4" style={{ fontSize: "15px" }}>
          <h6>About</h6>
          <p>Services <br />
          Privacy policy <br />
          Blogs <br />
          Terms of service <br />
          Professionals <br />
          Health Tips
          </p>
           
        </div>
      </div>
    </div>
   </div>
  );
};

export default Footer;
