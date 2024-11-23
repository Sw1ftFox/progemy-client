import React from "react";

interface VkIconProps {
  className: string;
}

export const VkIcon = ({ className }: VkIconProps) => {
  return (
    <svg
      className={className}
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.140991 11.8672C0.140991 10.0481 1.36049 9.33143 2.86049 9.23496L9.84449 9.28243C10.266 9.28243 10.641 9.5703 10.782 10.0006C12.3765 15.265 14.3445 18.5189 16.689 22.2031C16.83 22.491 17.064 22.6334 17.298 22.6334C17.4855 22.6334 17.673 22.5369 17.814 22.2981L17.955 21.7713L18.0015 13.4934C18.0015 12.2975 17.439 12.1061 16.1265 11.9146C15.6105 11.8182 15.282 11.3404 15.282 10.8611C15.282 10.7647 15.282 10.6697 15.3285 10.5733C15.9855 8.51527 18.048 7.4633 20.9535 7.4633L23.5785 7.41583C25.7355 7.41583 27.7035 8.37286 27.7035 11.1965V22.0592C27.891 22.2031 28.0785 22.2981 28.3125 22.2981C28.6875 22.2981 29.157 22.0592 29.532 21.436C31.9695 17.9432 34.7355 13.7797 35.1105 11.5778C35.1105 11.4813 35.157 11.4338 35.205 11.3389C35.721 10.2854 37.0335 9.56877 37.596 9.37736C37.6905 9.3299 37.83 9.28089 38.0175 9.28089H45.2835L45.753 9.32836C46.4565 9.32836 46.9725 9.80764 47.2065 10.2379C47.628 10.9086 47.535 11.6252 47.5815 11.9131V12.2485C46.878 16.6033 42.003 21.4834 39.9405 24.6424C39.6585 25.0252 39.519 25.3605 39.519 25.6959C39.519 25.9838 39.66 26.2701 39.894 26.558L46.7385 35.3627C47.1135 35.8894 47.301 36.5111 47.301 37.0379C47.301 38.6166 45.8475 39.5261 44.442 39.6701L43.6455 39.7175H36.5205C36.3795 39.7175 36.2865 39.765 36.1455 39.765C35.349 39.765 34.692 39.3347 34.224 38.8555C32.724 36.9889 31.2705 35.0748 29.817 33.2082C29.535 32.8254 29.442 32.7779 29.16 32.5865C28.8315 33.9738 28.551 35.4101 28.2225 36.8449L28.0815 37.658C27.8475 38.5201 27.237 39.4281 26.112 39.6686L25.455 39.716H20.8605C12.7515 39.716 5.48549 27.9438 0.376491 13.2545C0.235491 12.8717 0.142491 12.3449 0.142491 11.8672H0.140991ZM28.3125 24.2611C27.093 24.2611 25.734 23.543 25.734 22.2031V11.1965C25.734 9.90411 25.1715 9.42636 23.625 9.42636L20.9535 9.52283C19.4535 9.52283 18.609 9.76171 17.907 10.241C18.9855 10.7677 19.9695 11.4859 19.9695 13.4949V21.9168C19.8285 23.592 18.4695 24.6929 17.157 24.6929C16.266 24.6929 15.4695 24.1662 15 23.3056C12.891 20.0517 11.109 16.9892 9.56249 12.5869L9.14099 11.342L2.90699 11.2945C2.06249 11.2945 2.15699 11.342 2.15699 11.7738C2.15699 12.0616 2.20349 12.4445 2.25149 12.6833L3.23549 15.363C8.34449 28.8579 14.7675 37.7101 20.8605 37.7101H25.548C26.205 37.7101 26.157 36.897 26.298 36.4177L27.189 32.2068C27.3765 31.7765 27.5175 31.3937 27.846 31.0583C28.221 30.6755 28.6425 30.5316 29.0655 30.5316C29.9565 30.5316 30.7995 31.2497 31.362 31.9189L35.346 37.0869C35.6745 37.6136 35.955 37.7085 36.1425 37.7085H43.8765C44.6265 37.7085 45.2835 37.4697 45.2835 36.9904C45.2835 36.8465 45.237 36.6551 45.1425 36.5111L38.346 27.8504C37.7835 27.1322 37.5495 26.414 37.5495 25.6974C37.5495 24.9318 37.8315 24.1662 38.2995 23.4955C40.269 20.4805 44.487 16.1746 45.471 12.6328L45.612 12.0111C45.5655 11.7722 45.5655 11.5808 45.5175 11.3404H38.1585C37.689 11.5318 37.314 11.8197 37.0335 12.2025L36.7515 13.1121C35.673 16.1746 32.7195 20.3855 30.6105 23.3041C29.907 23.9748 29.109 24.2611 28.3125 24.2611Z"
        fill="#7CFFD8"
      />
    </svg>
  );
}