import React from "react";

interface CircleProps {
  className?: string;
  onClick?: () => void;
}

export const Circle = ({ className, onClick }: CircleProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="25"
      height="25"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15.5" cy="15.5" r="14" stroke="#7CFFD8" strokeWidth="3" />
    </svg>
  );
}
