import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  // hook to know whether mouse is hovering over the target
  const [active, setActive] = useState(false);

  return (
    <div
      className="TooltipWrapper"
      // while hovering
      onMouseEnter={() => setActive(true)}
      // when hovering stops
      onMouseLeave={() => setActive(false)}
    >
      {/* displaying button */}
      {props.children}
      {/* if hovering show tooltip */}
      {active && (
        <div className={`TooltipTip ${props.direction || "top"}`}>
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
