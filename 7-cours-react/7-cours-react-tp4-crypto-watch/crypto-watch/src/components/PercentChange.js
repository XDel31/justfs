import React, { useEffect, useState } from "react";
import colors from "../styles/_settings.scss";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]); //On utilise la props dans le callback car il n'est pas sûr qu'elle soit alimenté lors du 1er appel

  return (
    <p className="percent-change-container" style={{ color }}>
      {typeof percent === "number" && !isNaN(percent)
        ? percent.toFixed(1) + "%"
        : "-"}
    </p>
  );
};

export default PercentChange;
