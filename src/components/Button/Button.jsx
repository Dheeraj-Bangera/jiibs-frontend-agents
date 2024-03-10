import React from "react";

export default function Button({ children, style, onClick }) {
  return (
    <button
      className={`bg-button-${style} text-primary hover:bg-gray-300 px-5 rounded-lg text-[12px] sm:text-[14px] h-[32.6px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
