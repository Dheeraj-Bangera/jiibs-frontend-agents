import React from "react";

export default function CheckBox({ text, onClick }) {
  return (
    <div className="flex w-full items-center my-2 text-dark" onClick={onClick}>
      <input type="checkbox" id={text} />
      <label className="text-[14px] text-dark ml-2" htmlFor={text}>
        {text}
      </label>
    </div>
  );
}
