import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaIdCard,
  FaMale,
  FaBirthdayCake,
  FaHeartBroken,
  FaCaretRight,
  FaCaretLeft,
} from "react-icons/fa";
import TR from "../assets/images/TR.png";
import Soldier from "../assets/images/boots.png";
import {
  ScreenHeaderVariant,
  ScreenVariant,
  ScreenButtonsVariant,
} from "../helpers/Variants";

const Personal = ({ chageFooterColorsHandler }) => {
  return (
    <div className="personal-main-container">
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/contact" className="btn btn-outline-navy">
          <span>
            <FaCaretLeft
              className="fa-navigation-button"
              onClick={() =>
                chageFooterColorsHandler(
                  "rgba(255, 166, 0, 0.2)",
                  "rgba(255, 166, 0,1)"
                )
              }
            />
          </span>
        </Link>
      </motion.div>
      <div className="personal-container">
        <motion.div
          className="div-contact-header"
          variants={ScreenHeaderVariant}
          initial="hidden"
          animate="visible"
        >
          <h2>
            <FaIdCard className="me-3 mb-1" />
            Personal
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
                type="text"
                className="form-control"
                id="floatingInputGrid"
                disabled
              />
              <img src={TR} alt="Türkiye" className="per-icons" />
              <span>Republic of Türkiye</span>
              <label htmlFor="floatingInputGrid">Nationality</label>
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
              <FaMale className="per-icons" />
              <span>Male</span>
              <label htmlFor="floatingInputGrid">Gender</label>
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
              <FaBirthdayCake className="per-icons" />
              <span>29.12.1980</span>
              <label htmlFor="floatingInputGrid">Date Of Birth</label>
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
              <img src={Soldier} alt="Soldier-boots" className="per-icons" />
              <span>Completed (08.09.2006)</span>
              <label htmlFor="floatingInputGrid">Military Status</label>
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
              <FaHeartBroken className="per-icons" />
              <span>Single</span>
              <label htmlFor="floatingInputGrid">Marital Status</label>
            </div>
          </li>
        </motion.ul>
      </div>
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/qualifications" className="btn btn-outline-navy">
          <span>
            <FaCaretRight
              className="fa-navigation-button"
              onClick={() =>
                chageFooterColorsHandler("rgba(0, 128, 0, 0.2)", "green")
              }
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Personal;
