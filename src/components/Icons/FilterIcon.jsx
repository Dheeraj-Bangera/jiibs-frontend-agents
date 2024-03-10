import React from "react";

export default function FilterIcon({color}) {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5876 1H2.41607C1.52516 1 1.079 2.07714 1.70896 2.70711L6.70896 7.70711C6.8965 7.89464 7.00185 8.149 7.00185 8.41421V12.5C7.00185 12.8148 7.15005 13.1111 7.40185 13.3L10.2019 15.4C10.5315 15.6472 11.0019 15.412 11.0019 15V8.41421C11.0019 8.149 11.1072 7.89464 11.2947 7.70711L16.2947 2.70711C16.9247 2.07714 16.4785 1 15.5876 1Z"
        stroke={color ? color : "#999B9F"}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
