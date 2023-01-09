import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact container m-auto p-6">
      <div className="grid grid-rows-4 gap-4 text-center items-center relative md:grid-cols-4">
        <div className="drop-shadow-md bg-white py-3 px-2 rounded-md box">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </div>
        <div className="drop-shadow-md bg-white py-3 px-2 rounded-md box">
          github
        </div>
        <div className="drop-shadow-md bg-white py-3 px-2 rounded-md box">
          linkedin
        </div>
        <div className="drop-shadow-md bg-white py-3 px-2 rounded-md box">
          resume
        </div>
      </div>
    </div>
  );
};

export default Contact;
