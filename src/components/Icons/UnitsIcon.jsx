import React from "react";

export default function UnitsIcon({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0833 6.06478L9.99997 9.99996M9.99997 9.99996L2.91664 6.06478M9.99997 9.99996L10 17.9167M17.5 13.3821V6.61786C17.5 6.33232 17.5 6.18956 17.4579 6.06222C17.4207 5.94958 17.3599 5.84618 17.2795 5.75893C17.1886 5.66032 17.0638 5.59099 16.8142 5.45232L10.6475 2.02639C10.4112 1.89509 10.293 1.82944 10.1679 1.80371C10.0571 1.78093 9.94288 1.78093 9.83213 1.80371C9.70698 1.82944 9.58881 1.89509 9.35248 2.02639L3.18581 5.45232C2.93621 5.59099 2.8114 5.66032 2.72053 5.75894C2.64013 5.84618 2.57929 5.94958 2.54207 6.06223C2.5 6.18956 2.5 6.33233 2.5 6.61786V13.3821C2.5 13.6677 2.5 13.8104 2.54207 13.9378C2.57929 14.0504 2.64013 14.1538 2.72053 14.241C2.8114 14.3397 2.93621 14.409 3.18581 14.5477L9.35248 17.9736C9.58881 18.1049 9.70698 18.1705 9.83213 18.1963C9.94288 18.219 10.0571 18.219 10.1679 18.1963C10.293 18.1705 10.4112 18.1049 10.6475 17.9736L16.8142 14.5477C17.0638 14.409 17.1886 14.3397 17.2795 14.241C17.3599 14.1538 17.4207 14.0504 17.4579 13.9378C17.5 13.8104 17.5 13.6677 17.5 13.3821Z"
        stroke={color ? color : "#999B9F"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
