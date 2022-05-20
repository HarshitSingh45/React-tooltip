import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="TooltipWrapper"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {props.children}
      {active && (
        <div className={`TooltipTip ${props.direction || "top"}`}>
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
