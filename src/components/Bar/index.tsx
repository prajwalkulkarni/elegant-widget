import "./style.css";

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
    >
      <span className="tooltip">${amount.toFixed(2)}</span>
    </div>
  );
};
