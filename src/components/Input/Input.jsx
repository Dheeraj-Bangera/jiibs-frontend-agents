import React from "react";

export default function Input({ defaultValue, backgroundColor, onChange, value }) {
  return (
    <input
      defaultValue={defaultValue}
      className={`text-[12px] sm:text-[14px] px-3 py-2 mt-1 sm:mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg outline-none ${
        backgroundColor ? `bg-[${backgroundColor}]` : ""
      }`}
      onChange={onChange}
      value={value}
    />
  );
}
