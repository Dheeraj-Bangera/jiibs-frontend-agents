import React from "react";

export default function AddItem({ onClick, title }) {
  return (
    <div
      className="flex items-center cursor-pointer p-2 rounded-lg"
      onClick={onClick}
    >
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.16602 7.42839H0.166016V5.76172H5.16602V0.761719H6.83268V5.76172H11.8327V7.42839H6.83268V12.4284H5.16602V7.42839Z"
          fill="#1C1B1F"
        />
      </svg>
      <div className="ml-3 text-[12px] font-semibold">{title ? title : 'ADD ITEM'}</div>
    </div>
  );
}
