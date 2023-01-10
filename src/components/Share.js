import {
  faArrowUpFromBracket,
  faShareAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qr from "../assets/qr.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";
import React, { useState } from "react";

const dropIn = {
  hidden: {
    x: "100vw",
    opacity: "0",
  },
  visible: {
    x: "0",
    opacity: "1",
    duration: "0.1",
    type: "spring",
  },
  exit: {
    x: "100vw",
    opacity: "0",
  },
};

const Share = ({ SetShowSlide }) => {
  const [copied, setCopied] = useState(false);
  return (
    <motion.div
      className="share"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="flex justify-between px-4 py-4">
        <FontAwesomeIcon
          icon={faXmark}
          color="#fff"
          size="xl"
          onClick={() => SetShowSlide((val) => !val)}
        />
        <CopyToClipboard text="https://deluxe-blancmange-78bd64.netlify.app/">
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            color="#fff"
            size="xl"
            onClick={() => setCopied((val) => !val)}
          />
        </CopyToClipboard>
      </header>
      <section className="flex flex-col items-center qr-code">
        <div className="qr-box p-5">
          <img src={qr} alt="qrcode" className=" rounded-xl" />
          <p className="text-white mt-5 text-sm">
            Point your camera to scan QR Code, or Copy link from the share
            button.
          </p>
        </div>
        <CopyToClipboard text="https://deluxe-blancmange-78bd64.netlify.app/">
          <button
            className="bg-white rounded-md px-4 py-2 drop-shadow-lg cursor-pointer btn text-center mt-5"
            onClick={() => setCopied((val) => !val)}
          >
            <FontAwesomeIcon
              className="mx-2"
              icon={faShareAlt}
              color="#9060dd"
            />
            Copy Link
          </button>
        </CopyToClipboard>
      </section>
      {copied && (
        <motion.p
          className="text-center p-2 mt-3 bg-white rounded-md text-sm mx-auto copied"
          initial={{ y: "-100vh" }}
          animate={{ y: "-72vh", duration: "0.1", type: "spring" }}
          exit={{ y: "-100vh" }}
        >
          Link Copied to Clipboard
        </motion.p>
      )}
    </motion.div>
  );
};

export default Share;
