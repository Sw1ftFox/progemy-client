import React from "react";

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

export const Arrow = ({ className, onClick }: ArrowProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="71"
      height="244"
      viewBox="0 0 71 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69 242L2 122"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M69 2L2 122"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
