import React from "react";
import Tooltip from "./Tooltip";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> React tooltip</h1>

      <div>
        <Tooltip content="Hovering at top!" direction="top">
          <button className="btn">Top Hover Button</button>
        </Tooltip>
      </div>

      <div>
        <Tooltip content="Hovering at bottom!" direction="bottom">
          <button className="btn">Bottom Hover Button</button>
        </Tooltip>
      </div>

      <div>
        <Tooltip content="Hovering at right!" direction="right">
          <button className="btn">Right Hover Button</button>
        </Tooltip>
      </div>

      <div>
        <Tooltip content="Hovering at left!" direction="left">
          <button className="btn">Left Hover Button</button>
        </Tooltip>
      </div>
      
    </div>
  );
}
