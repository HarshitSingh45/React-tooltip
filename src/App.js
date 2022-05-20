import React from "react";
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div className="App">
      {/* heading */}
      <h1> React tooltip</h1>
      {/* top hovering tooltip component which contains button and tooltip */}
      <div>
        {/* passing content and direction as props */}
        <Tooltip content="Hovering at top!" direction="top">
          {/* component child */}
          <button className="btn">Top Hover Button</button>
        </Tooltip>
      </div>
      {/* bottom hovering tooltip component which contains button and tooltip */}
      <div>
        {/* passing content and direction as props */}
        <Tooltip content="Hovering at bottom!" direction="bottom">
          {/* component child */}
          <button className="btn">Bottom Hover Button</button>
        </Tooltip>
      </div>
      {/* right hovering tooltip components which contains button and tooltip */}
      <div>
        {/* passing content and direction as props */}
        <Tooltip content="Hovering at right!" direction="right">
          {/* component child */}
          <button className="btn">Right Hover Button</button>
        </Tooltip>
      </div>
      {/* left hovering tooltip components which contains button and tooltip */}
      <div>
        {/* passing content and direction as props */}
        <Tooltip content="Hovering at left!" direction="left">
          {/* component child */}
          <button className="btn">Left Hover Button</button>
        </Tooltip>
      </div>
      
    </div>
  );
}
