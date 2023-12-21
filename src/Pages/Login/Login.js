import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
import loginimg from "../Images/loginimages/loginimg.jpg";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef(); 
   
  const navigate = useNavigate();
  const location = useLocation();
  var from = (location.state && location.state.from && location.state.from.pathname) || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth); 


  
  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   );
  // }
  

  const handleLogin = e =>{
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
       
      signInWithEmailAndPassword(email,password);
       
   
  }

  // if(user){
  //   navigate(from, { replace: true });
  // }
  if(user){
    navigate(from,{replace:true});
  }
  return (
    <div>
      <div className="w-50 d-flex justify-content-center mx-auto mt-5  ">
        <div>
          <img src={loginimg} alt="" className="rounded-start" />
        </div>
        <div className="bg-light p-4 rounded-end">
          <Form onSubmit={handleLogin} className="my-auto">
            <Form.Group className="mb-2 " controlId="formBasicEmail">
              <div style={{ color: "#929AAB" }}>
                <h6>
                  <FontAwesomeIcon icon={faKey} /> Please Login
                </h6>
              </div>

              <Form.Control
                size="sm"
                type="email"
                className="mw-100"
                placeholder="Enter email"
                ref={emailRef}
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Control size="sm" type="password" placeholder="Password" ref={passwordRef}/>
            </Form.Group>
             
            
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
            {/* </Form.Group> */}
            <Button variant="dark" className="btn-sm" type="submit">
              Login
            </Button>
          </Form>
           
            <p className="text-danger">{error?.message}</p>
             
          <p>
            New to Mindfulness?<Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
