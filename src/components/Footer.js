import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = ({ SetShowSlide }) => {
  return (
    <div className="">
      <div className=" flex justify-center">
        <button
          className="bg-white rounded-md px-4 py-2 drop-shadow-lg cursor-pointer btn"
          onClick={() => SetShowSlide((val) => !val)}
        >
          <FontAwesomeIcon className="mx-2" icon={faShareAlt} color="#9060dd" />
          More options...
        </button>
      </div>
    </div>
  );
};

export default Footer;
