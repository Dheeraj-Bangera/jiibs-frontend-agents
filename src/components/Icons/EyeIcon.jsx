import React from "react";

export default function EyeIcon({ color }) {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.01677 7.59464C1.90328 7.41494 1.84654 7.32509 1.81477 7.18651C1.79091 7.08241 1.79091 6.91824 1.81477 6.81415C1.84654 6.67556 1.90328 6.58571 2.01677 6.40601C2.95461 4.92103 5.74617 1.16699 10.0003 1.16699C14.2545 1.16699 17.0461 4.92103 17.9839 6.40601C18.0974 6.58571 18.1541 6.67556 18.1859 6.81415C18.2098 6.91824 18.2098 7.08241 18.1859 7.18651C18.1541 7.32509 18.0974 7.41494 17.9839 7.59464C17.0461 9.07962 14.2545 12.8337 10.0003 12.8337C5.74617 12.8337 2.95461 9.07963 2.01677 7.59464Z"
        stroke={color ? color : "#222222"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0003 9.50033C11.381 9.50033 12.5003 8.38104 12.5003 7.00033C12.5003 5.61961 11.381 4.50033 10.0003 4.50033C8.61962 4.50033 7.50034 5.61961 7.50034 7.00033C7.50034 8.38104 8.61962 9.50033 10.0003 9.50033Z"
        stroke={color ? color : "#222222"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}