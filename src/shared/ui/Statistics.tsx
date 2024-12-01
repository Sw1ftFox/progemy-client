import React from "react";

interface StatisticsProps {
  className: string;
}

export const Statistics = ({ className }: StatisticsProps) => {
  return (
    <svg
      className={className}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.35 28H10.85C11.0425 28 11.2 27.8425 11.2 27.65V7.35C11.2 7.1575 11.0425 7 10.85 7H7.35C7.1575 7 7 7.1575 7 7.35V27.65C7 27.8425 7.1575 28 7.35 28ZM15.75 15.75H19.25C19.4425 15.75 19.6 15.5925 19.6 15.4V7.35C19.6 7.1575 19.4425 7 19.25 7H15.75C15.5575 7 15.4 7.1575 15.4 7.35V15.4C15.4 15.5925 15.5575 15.75 15.75 15.75ZM24.15 18.9H27.65C27.8425 18.9 28 18.7425 28 18.55V7.35C28 7.1575 27.8425 7 27.65 7H24.15C23.9575 7 23.8 7.1575 23.8 7.35V18.55C23.8 18.7425 23.9575 18.9 24.15 18.9ZM33.6 0H1.4C0.625625 0 0 0.625625 0 1.4V33.6C0 34.3744 0.625625 35 1.4 35H33.6C34.3744 35 35 34.3744 35 33.6V1.4C35 0.625625 34.3744 0 33.6 0ZM31.85 31.85H3.15V3.15H31.85V31.85Z"
        fill="#7CFFD8"
      />
    </svg>
  );
};