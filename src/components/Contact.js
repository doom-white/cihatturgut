import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaAddressBook,
  FaCopy,
  FaHandPointRight,
  FaHandPointLeft,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import {
  ScreenHeaderVariant,
  ScreenVariant,
  ScreenButtonsVariant,
} from "../helpers/Variants";

const Contact = ({ chageFooterColorsHandler }) => {
  const onClipboardHandler = (e) => {
    navigator.clipboard.writeText(
      e.target.parentElement.parentElement.children[2].innerText
    );
    console.log();
    toast.success("Copied!");
  };

  return (
    <div className="contact-main-container">
      <motion.div
        className="div-contact-header"
        variants={ScreenHeaderVariant}
        initial="hidden"
        animate="visible"
      >
        <h2>
          <FaAddressBook className="me-3 mb-1" />
          Contact
        </h2>
      </motion.div>
      <motion.ul
        className="list-group-fluid mb-5"
        variants={ScreenVariant}
        initial="hidden"
        animate="visible"
      >
        <li className="list-group-item">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInputGrid"
              disabled
            />

            <FaCopy
              className="contact-copy-icon"
              id="btnEmail"
              onClick={onClipboardHandler}
            />
            <span>cihatturgut@yandex.com</span>
            <label htmlFor="floatingInputGrid">Email address</label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGrid"
              disabled
            />
            <FaCopy
              className="contact-copy-icon"
              id="btnPhoneNumber"
              onClick={onClipboardHandler}
            />
            <span>(+90) 501 372 5593</span>
            <label htmlFor="floatingInputGrid">Phone Number</label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGrid"
              disabled
            />
            <FaCopy
              className="contact-copy-icon"
              id="btnAddress"
              onClick={onClipboardHandler}
            />
            <span>Türkiye / Homeless</span>
            <label htmlFor="floatingInputGrid">Address</label>
            <ToastContainer autoClose={300} position="top-center" />
          </div>
        </li>
      </motion.ul>
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/" className="btn btn-outline-navy me-4">
          <span>
            <FaHandPointLeft
              onClick={() =>
                chageFooterColorsHandler(
                  "rgba(220, 20, 60, 0.3)",
                  "rgba(220, 20, 60, 1)"
                )
              }
            />
          </span>
        </Link>

        <Link to="/personal" className="btn btn-outline-navy">
          <span>
            <FaHandPointRight
              onClick={() =>
                chageFooterColorsHandler(
                  "rgba(255, 255, 0, 0.2)",
                  "rgb(163, 163,6)"
                )
              }
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
