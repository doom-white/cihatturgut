import React from "react";
import jsonData from "../assets/data/db.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScreenVariant, ScreenButtonsVariant } from "../helpers/Variants";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";

export const DataCart = () => {
  return (
    <div>
      {jsonData.experiences.map((data) => (
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
              <div className="card-body experiences-card d-flex align-items-center">
                <div className="left">
                  <h5 className="card-title text-end">Company Name:</h5>
                  <h5 className="card-title text-end">Profession:</h5>
                  <h5 className="card-title text-end">Years:</h5>
                  <h5 className="card-title text-end">Company Sector:</h5>
                  <h5 className="card-title text-end">City:</h5>
                </div>
                <div className="rigth">
                  <h5 className="card-title ms-5">{data["company-name"]}</h5>
                  <h5 className="card-title ms-5">{data.Profession}</h5>
                  <h5 className="card-title ms-5">
                    {data["Between-years"]}{" "}
                    <span className="badge text-bg-warning">{data.total}</span>
                  </h5>
                  <h5 className="card-title ms-5">{data["company-sector"]}</h5>
                  <h5 className="card-title ms-5">{data.city}</h5>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Experiences = (props) => {
  return (
    <div className="experiences-container">
      <DataCart />
      <motion.div
        className="div-navigation-button"
        variants={ScreenButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/qualifications" className="btn btn-outline-navy me-4">
          <span>
            <FaHandPointLeft
              onClick={() =>
                props.chageFooterColorsHandler("rgba(0, 128, 0, 0.2)", "green")
              }
            />
          </span>
        </Link>
        <Link to="/educations" className="btn btn-outline-navy">
          <span>
            <FaHandPointRight
              onClick={() =>
                props.chageFooterColorsHandler("rgba(0, 0, 128, 0.2)", "navy")
              }
            />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Experiences;
