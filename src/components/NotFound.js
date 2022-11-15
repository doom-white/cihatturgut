import React, { useEffect } from "react";
import NotFound404 from "../assets/images/nfx404.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Screen404ButtonsVariant } from "../helpers/Variants";
import { FaHandPointLeft } from "react-icons/fa";

const NotFound = ({ chageFooterColorsHandler }) => {
  useEffect(() => {
    chageFooterColorsHandler("#0e37633c", "#0E3763");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="notfound-container">
      <img src={NotFound404} alt="notfoundpage" />
      <motion.div
        className="div-navigation-button"
        variants={Screen404ButtonsVariant}
        initial="hidden"
        animate="visible"
      >
        <Link to="/" className="btn btn-outline-navy">
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
      </motion.div>
    </div>
  );
};

export default NotFound;
