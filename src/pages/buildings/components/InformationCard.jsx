import React from "react";
import Input from "../../../components/Input/Input";

export default function InformationCard() {
  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6 sm:mt-0">
      {/* start of information */}
      <div>
        <div className="text-[14px] sm:text-[16px] mt-2">Building Name</div>
        <Input />
      </div>
      <div className="mt-4">
        <div className="text-[14px] sm:text-[16px] mt-2">Address</div>
        <Input />
      </div>
      {/* start of numerical information */}
      <div className="mt-4 flex justify-between w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">
            Building Stories
          </div>
          <div className="max-w-[100px]">
            <Input />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">Year Built</div>
          <div className="max-w-[100px]">
            <Input />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">Total Units</div>
          <div className="max-w-[100px]">
            <Input />
          </div>
        </div>
      </div>
      {/* start of description */}
      <div>
        <div className="text-[14px] sm:text-[16px] mt-4">Description</div>
        <textarea
          rows={8}
          multiple="true"
          className="text-[14px] px-3 py-1 mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg outline-none"
        />
      </div>
    </div>
  );
}