import React, { useEffect } from "react";
import NotFound404 from "../assets/images/nfx404.png";

const NotFound = ({ chageFooterColorsHandler, theme }) => {
  useEffect(() => {
    chageFooterColorsHandler("#0e37633c", "#0E3763");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`notfound-container ${theme}`}>
      <img src={NotFound404} alt="notfoundpage" />
    </div>
  );
};

export default NotFound;
