import React from "react";

interface CornerProps {
  className: string,
}

export default function Corner({className}: CornerProps) {
  return (
    <svg
      className={className}
      width="122"
      height="121"
      viewBox="0 0 122 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 1.5H120"
        stroke="#7CFFD8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 3.5L1.99999 119.5"
        stroke="#7CFFD8"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
