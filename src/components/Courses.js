import React from "react";
import jsonData from "../assets/data/db.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { ScreenVariant, ScreenButtonsVariant } from "../helpers/Variants";

export const DataCart = ({ theme }) => {
  return (
    <div>
      {jsonData.courses.map((data) => (
        <motion.div
          className="card mb-2"
          key={data.id}
          variants={ScreenVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img
                src={data.picture}
                className="img-fluid img-size"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div
                className={`card-body experiences-card d-flex align-items-center ${
                  theme === "dark" ? "bg-dark" : null
                }`}
              >
                <div className="left">
                  <h5 className="card-title text-end">Company Name:</h5>
                  <h5 className="card-title text-end">Instruction Type:</h5>
                  <h5 className="card-title text-end">Education Type:</h5>
                  <h5 className="card-title text-end">Educational Content:</h5>
                  <h5 className="card-title text-end">Start - End Date:</h5>
                </div>
                <div className="rigth">
                  <h5 className="card-title ms-5">{data.companyName}</h5>
                  <h5 className="card-title ms-5">{data.instructionType}</h5>
                  <h5 className="card-title ms-5">{data.educationType}</h5>
                  <h5 className="card-title ms-5">{data.educationalContent}</h5>
                  <h5 className="card-title ms-5">
                    {data.years}{" "}
                    <span className="badge text-bg-warning">{data.total}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Courses = (props) => {
  return (
    <div className="experiences-main-container">
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/educations" className="btn btn-outline-navy">
          <span>
            <FaCaretLeft
              className="fa-navigation-button"
              color={props.theme === "dark" ? "#F8F9FA" : "#0e3763"}
              onClick={() =>
                props.chageFooterColorsHandler(
                  "rgba(0, 0, 128, 0.2)",
                  "rgb(18, 18, 224)"
                )
              }
            />
          </span>
        </Link>
      </motion.div>
      <div className="experiences-container">
        <DataCart theme={props.theme} />
      </div>
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/summary" className="btn btn-outline-navy">
          <span>
            <FaCaretRight
              className="fa-navigation-button"
              color={props.theme === "dark" ? "#F8F9FA" : "#0e3763"}
              onClick={() =>
                props.chageFooterColorsHandler("rgba(0, 0, 0, 0.2)", "black")
              }
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Courses;
