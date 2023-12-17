import {
  faAngleDown,
  faKey,
  faRegistered,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation} from "react-router-dom";
import auth from "../../../firebase.init";
import loginimg2 from "../../Images/loginimages/loginimg.jpg";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  var from = (location.state && location.state.from && location.state.from.pathname) || '/';
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };
  if(user) {
    navigate(from,{replace:true});
  }
  return (
    <div>
      <div className="  d-flex justify-content-center mx-auto mt-5  ">
        <div>
          <img src={loginimg2} alt="" className=" rounded-start" />
        </div>
        <div className="bg-light p-4 pb-0 rounded-end">
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <div style={{ color: "#929AAB" }}>
                <h6>
                  <FontAwesomeIcon icon={faAngleDown} /> Sign Up
                </h6>
              </div>
              <Form.Control
                size="sm"
                type="text"
                ref={nameRef}
                placeholder="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                size="sm"
                type="email"
                ref={emailRef}
                className="mw-100"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                size="sm"
                type="password"
                ref={passwordRef}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>

            <Button variant="dark" className="btn-sm" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>
            Already have an account?<Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;