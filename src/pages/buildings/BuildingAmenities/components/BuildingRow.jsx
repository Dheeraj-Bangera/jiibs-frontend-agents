import React from "react";

export default function BuildingRow({ id, src, title, active, onClose }) {
  return (
    <div className="py-3 px-5 flex w-full items-center hover:bg-gray-100 border-t border-primary">
      <div className="ml-1 w-[50px]">{`${id}.`}</div>
      <img src={src} className="w-[30px] h-[30px] mr-4" />
      <div className="w-full">{title}</div>
      <div className="mr-4 text-[12px] px-3 py-1 bg-[#2AB7DD20] rounded-full">
        Active
      </div>
      <div className="ml-6 mr-3" onClick={onClose}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
}
