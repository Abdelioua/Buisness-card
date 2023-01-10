import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileText } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact container m-auto p-3 relative">
      <div className="ml-2 mb-2 border-l-2">
        <h2 className="text-white ml-4">Abderrahmane Abdelioua</h2>
        <p className="text-white text-sm ml-4">Web developer</p>
      </div>
      <div className="grid grid-rows-4 gap-4 text-center items-center relative ">
        <div className="drop-shadow-md bg-white py-3 px-2 rounded-md box ">
          <FontAwesomeIcon icon={faFileText} />
          <a
            target="_blank"
            href="https://neon-haupia-8d5e96.netlify.app"
            className="inline mx-2"
            rel="noreferrer"
          >
            Portfolio Website
          </a>
        </div>
        <div className="drop-shadow-md bg-white py-3 px-2 rounded-md box">
          <FontAwesomeIcon icon={faGithub} />
          <a
            target="_blank"
            href="https://github.com/Abdelioua"
            className="inline mx-2"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="drop-shadow-md bg-white py-3 px-2 rounded-md box">
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abderrahmane-abdelioua/"
            className="inline mx-2"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="drop-shadow-md bg-white py-3 px-2 rounded-md box">
          <FontAwesomeIcon icon={faEnvelope} />
          <a
            target="_blank"
            className="inline mx-2"
            href="mailto:abderrahmane.abdelioua@gmail.com"
            rel="noreferrer"
          >
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
