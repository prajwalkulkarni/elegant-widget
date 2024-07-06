import "./style.css";
//Need react import for component testing
import React from "react";
export const Bar = ({
  height,
  color,
  amount,
}: {
  height: number;
  color: string;
  amount: number;
}) => {
  return (
    <div
      className="bar_transition"
      style={{ backgroundColor: color, height, width: "40px" }}
      data-testid="bar"
    >
      <span className="tooltip" data-testid="tooltip">
        ${amount.toFixed(2)}
      </span>
    </div>
  );
};
