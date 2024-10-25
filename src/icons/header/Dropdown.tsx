import React from "react";

interface DropdownProps {
  className: string,
}

export default function Dropdown({className}: DropdownProps) {
  return (
    <svg
      className={className}
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5.5 5L10 1"
        stroke="#CFD3DA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
