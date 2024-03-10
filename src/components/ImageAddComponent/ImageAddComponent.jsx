import React from "react";

export default function ImageAddComponent({ onSelect }) {
  return (
    <div className="border border-primary rounded-lg mr-3 sm:mr-5 mb-3">
      <div className="relative rounded-lg flex flex-col items-center justify-center w-[146px] h-[146px] sm:w-[146px] sm:h-[146px]">
        <input
          type="file"
          className="absolute left-0 right-0 bottom-0 top-0 opacity-0 cursor-pointer"
          onChange={onSelect}
        />
        <div className="cursor-pointer text-dark hover:text-primary text-[12px]">
          Add
        </div>
        <div className="text-dark hover:text-primary text-[12px]">
          Add from URL
        </div>
      </div>
    </div>
  );
}
