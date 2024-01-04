import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="bg-light py-5 mx-lg-5 rounded text-center">
      <h2 style={{ color: "#474A56" }}>FAQ</h2>
      <div
        className="d-flex justify-content-center"
        style={{ color: "#D3D5FD" }}
      >
        <h5 className="px-3 pt-4" style={{ color: "#929AAB" }}>
          Frequently <span style={{ color: "#474A56" }}>Asked</span> Question{" "}
          <br />{" "}
        </h5>
        <FontAwesomeIcon icon={faQuestion} style={{ height: "130px" }} />
      </div>

      <div className="w-75 mx-auto">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to Improve Self-Esteem?</Accordion.Header>
            <Accordion.Body className="m-lg-5 p-lg-5 text-start bg-light">
                <h6>How to Improve Self-Esteem?</h6>
              SELF-ESTEEM IS KEY It’s really important to have self-esteem — we
              hear that a lot, and we might believe it, but that doesn’t mean
              it’s easy to do. Sometimes when we try to believe in ourselves,
              dark clouds of doubt or even self-loathing gather. Sure, it’s
              possible to fake confidence, but what is the trick to building
              genuine self-esteem? Right now, right here, your true nature is
              wonderful, pure, and perfect. 
              <p>This is true regardless of what kind
              of person you are, what social class or categories you might fit
              into, what gender or race you identify with, where on the map you
              come from, or what your past history consists of. But merely being
              told that this is the case is not enough, of course. To build
              self-esteem, you need to know what the good qualities within you
              actually are.</p>
              <p>
              And there are so many of them! To start with, you
              have wisdom, love, and compassion. You have knowledge, skills, and
              powers. Some of these capabilities you’re aware of, some of these
              you take for granted, and some you’re not conscious of. In all
              probability, you don’t have a realistic sense of how truly capable
              you are.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>WHY IS IT HARD TO SEE OUR GOOD QUALITIES?</Accordion.Header>
            <Accordion.Body className="m-lg-5 p-lg-5 text-start bg-light">
                <h6>WHY IS IT HARD TO SEE OUR GOOD QUALITIES?</h6>
               <p>Our fundamental nature is good, yes. But most of the time, we are tossed on waves of desire, craving, anger, pride, ignorance, and jealousy. “I’ve got to get a better apartment. I’m desperate for cash. My boss doesn’t see that I do his job better than he does. I have no idea how to fix this relationship. My best friend always has someone, and I’m still single — it’s not fair!”</p>
               <p>In Buddhism, these powerful emotions are referred to as “the five defilements” or “the five poisons.” They influence our behavior, creating untold suffering: problems in our relationships, depression, panic, lack of self-love, physical disease, and problems for the environment, too.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
