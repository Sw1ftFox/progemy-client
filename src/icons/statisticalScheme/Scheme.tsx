import React from "react";

interface SchemeProps {
  className: string;
}

const Scheme = ({ className }: SchemeProps) => {
  return (
    <svg
      className={className}
      width="290"
      height="290"
      viewBox="0 0 290 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_29_396)">
        <circle
          cx="124.863"
          cy="124.863"
          r="74.8274"
          transform="rotate(-178.419 124.863 124.863)"
          fill="#282A2E"
        />
      </g>
      <circle
        cx="129.373"
        cy="124.85"
        r="72.6266"
        stroke="#7CFFD8"
        strokeWidth="15"
      />
      <path
        d="M189.76 165.199C181.78 177.142 170.437 186.451 157.166 191.948C143.896 197.445 129.293 198.883 115.205 196.081C101.116 193.279 88.1756 186.362 78.0186 176.205C67.8616 166.048 60.9446 153.107 58.1422 139.019C55.3399 124.93 56.7782 110.328 62.2751 97.0568C67.772 83.786 77.0808 72.4432 89.0242 64.4629C100.968 56.4826 115.009 52.2231 129.373 52.2231"
        stroke="#355B50"
        strokeWidth="15"
      />
      <path
        d="M58.1422 139.019C55.3399 124.93 56.7782 110.328 62.2751 97.0568C67.772 83.786 77.0808 72.4432 89.0242 64.4629C100.968 56.4826 115.009 52.2231 129.373 52.2231"
        stroke="#CFFFF1"
        strokeWidth="15"
      />
      <path
        d="M72.8437 79.2533C62.7155 91.8101 57.0563 107.382 56.759 123.511C56.4617 139.641 61.5432 155.41 71.2018 168.332"
        stroke="#7FD6BC"
        strokeWidth="15"
      />
      <defs>
        <filter
          id="filter0_dd_29_396"
          x="0.0351562"
          y="0.0351562"
          width="289.656"
          height="289.656"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-5" dy="-5" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.281875 0 0 0 0 0.314071 0 0 0 0 0.341667 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_29_396"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="20" dy="20" />
          <feGaussianBlur stdDeviation="35" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0767361 0 0 0 0 0.0767361 0 0 0 0 0.0833333 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_29_396"
            result="effect2_dropShadow_29_396"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_29_396"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Scheme;
