import React from "react";
import Input from "../../../../components/Input/Input";

export default function InformationCard() {
  return (
    <div className="bg-white py-4 px-5 rounded-lg shadow-sm">
      {/* start of information */}
      <div>
        <div className="text-[16px] mt-2">Title</div>
        <Input />
      </div>
      {/* start of description */}
      <div>
        <div className="text-[16px] mt-4">Description</div>
        <textarea
          rows={8}
          multiple="true"
          className="text-[14px] px-3 py-1 mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg outline-none"
        />
      </div>
    </div>
  );
}
