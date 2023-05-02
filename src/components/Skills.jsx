import React,{useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faJava,
  faReact,
  faNodeJs,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import {DiMongodb, DiHtml5} from 'react-icons/di'
import {SiExpress,SiCss3, SiRedux, SiTailwindcss} from 'react-icons/si'
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";

export const Skills = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <section data-aos="fade-up" className="sections" id="skills">
        <h1 data-aos="fade-up"  className="heading">
        <span className="sauce">1. </span>Skills
      </h1>
      <div></div>
        <p data-aos="fade-up">Here are a few technologies I’ve been working with recently:</p>
          <ul data-aos="fade-up"  className="skills-list">
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" icon={faJsSquare} /> JavaScript
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" icon={faReact} /> ReactJs
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" /><SiRedux color="#ff6b6b"/> Redux
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name"/> <SiExpress color="#ff6b6b"/> ExpressJs
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" icon={faNodeJs} /> Node.js
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name"/> <DiMongodb color="#ff6b6b"/> MangoDb
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" /><DiHtml5 color="#ff6b6b"/> HTML
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" /><SiCss3 color="#ff6b6b"/> CSS
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" /><SiTailwindcss color="#ff6b6b"/> Tailwind
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" icon={faGitSquare} /> Git
            </li>
            <li className="skills-card">
              <FontAwesomeIcon className="sauce skills-card-img skills-card-name" size="lg" icon={faJava} /> Java
            </li>
          </ul>
    </section>
  )
}
