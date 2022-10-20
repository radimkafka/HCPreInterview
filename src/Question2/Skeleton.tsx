import React from "react";

const Skeleton: React.FC = () => (
  <span
    style={{
      display: "block",
      backgroundColor: "rgba(0, 0, 0, .1)",
      height: "1.5rem",
      width: "60%"
    }}
  />
);
export default Skeleton;
