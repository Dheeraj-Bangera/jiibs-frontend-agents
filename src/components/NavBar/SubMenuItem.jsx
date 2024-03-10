import React from "react";

export default function SubMenuItem({ url, text, current, onClick }) {
  const active = url === current;
  return (
    <div
      className={`py-2 flex px-4 my-2 items-center hover:bg-secondary rounded-lg cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`ml-7 font-semibold color-gray text-[15px] ${
          active ? "text-primary" : "text-secondary"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
