import React from "react";

interface EllipseProps {
  className: string,
}

export const Ellipse = ({className}: EllipseProps) => {
  return (
    <svg
      className={className}
      width="81"
      height="81"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="40.5"
        cy="40.5"
        r="36"
        fill="#7CFFD8"
        fillOpacity="0.3"
        stroke="#7CFFD8"
        strokeWidth="9"
      />
    </svg>
  );
}
