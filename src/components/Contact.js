import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileText } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact container m-auto px-3 relative">
      <div className="ml-2 my-5 border-l-2">
        <h2 className="text-white ml-4">Abderrahmane Abdelioua</h2>
        <p className="text-white text-sm ml-4">Frontend web developer</p>
      </div>
      <div className="grid grid-rows-4 gap-3 text-center items-center relative my-5">
        <div className="drop-shadow-md bg-white rounded-md w-3/4 h-12 flex items-center mx-auto box">
          <a
            target="_blank"
            href="https://abderrahmane-abdelioua.netlify.app"
            className=" inline-block w-full"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-2" icon={faFileText} />
            Portfolio Website
          </a>
        </div>
        <div className="drop-shadow-md bg-white rounded-md w-3/4 h-12 flex items-center mx-auto box">
          <a
            target="_blank"
            href="https://github.com/Abdelioua"
            className="inline-block w-full"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-2" icon={faGithub} />
            Github
          </a>
        </div>
        <div className="drop-shadow-md bg-white rounded-md w-3/4 h-12 flex items-center mx-auto box">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abderrahmane-abdelioua/"
            className="inline-block w-full"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
            LinkedIn
          </a>
        </div>
        <div className="drop-shadow-md bg-white rounded-md w-3/4 h-12 flex items-center mx-auto box">
          <a
            target="_blank"
            className="inline-block w-full"
            href="mailto:abderrahmane.abdelioua@gmail.com"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
