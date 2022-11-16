import React from "react";
import jsonData from "../assets/data/db.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScreenVariant, ScreenButtonsVariant } from "../helpers/Variants";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

export const DataCart = ({ theme }) => {
  return (
    <div>
      {jsonData.educations.map((data) => (
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
                  <h5 className="card-title text-end">School Name:</h5>
                  <h5 className="card-title text-end">Faculty:</h5>
                  <h5 className="card-title text-end">Department:</h5>
                  <h5 className="card-title text-end">Instruction Type:</h5>
                  <h5 className="card-title text-end">Grade:</h5>
                </div>
                <div className="rigth">
                  <h5 className="card-title ms-5">
                    {data["school-name"]}{" "}
                    <span className="badge text-bg-info">
                      <small>{data.years}</small>
                    </span>
                  </h5>
                  <h5 className="card-title ms-5">{data.faculty}</h5>
                  <h5 className="card-title ms-5">
                    {data.department}{" "}
                    <span className="badge text-bg-warning">
                      <small>{data.language}</small>
                    </span>
                  </h5>
                  <h5 className="card-title ms-5">
                    {data["instruction-type"]}
                  </h5>
                  <h5 className="card-title ms-5">
                    {" "}
                    <span className="badge  text-bg-success">{data.grade}</span>
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

const Educations = (props) => {
  return (
    <div className="experiences-main-container">
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/experiences" className="btn btn-outline-navy">
          <span>
            <FaCaretLeft
              className="fa-navigation-button"
              color={props.theme === "dark" ? "#F8F9FA" : "#0e3763"}
              onClick={() =>
                props.chageFooterColorsHandler(
                  "rgba(0, 60, 255, 0.2)",
                  "rgb(0, 60,255)"
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
        <Link to="/courses" className="btn btn-outline-navy">
          <span>
            <FaCaretRight
              className="fa-navigation-button"
              color={props.theme === "dark" ? "#F8F9FA" : "#0e3763"}
              onClick={() =>
                props.chageFooterColorsHandler(
                  "rgba(128, 0, 128, 0.2)",
                  "purple"
                )
              }
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Educations;
