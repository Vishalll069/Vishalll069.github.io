import React, { useState } from "react";
import img from "../images/logo/image.png";
import Rubber from "./Rubber";
import Typewriter from "typewriter-effect";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Intro({ handleClick, boolean }) {
  return (
    <div
      id="hero"
      className="hero"
      onClick={() => {
        if (boolean === false) handleClick();
      }}
    >
      <div id="hero-img">
        <img src={img} alt="" />
      </div>
      <div className="intro give-padding contain">
        <div className="txt-light-red twent">
          Namaste<span className="wave">🙏</span>, my name is
        </div>
        <div className="bio name lighter-red">
          <Rubber text={"Vishal Durge."} />{" "}
        </div>
        <div className="bio what-i-do">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I Do Frontend.")
                .pause(2000)
                .deleteAll()
                .typeString("I Do Backend.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>

        <div className="info">
        Highly passionate and user-focused Developer👨‍💻 from INDIA🇮🇳 adept in collaborating with teams to plan the technical
writing and execution of functional specifications for
websites and applications
          

        </div>
        <div className="button-container">
          <a className="contact-button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
