import React from "react";
import Input from "../../../components/Input/Input";

export default function InformationCardUnit({ formData, updateField }) {
  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6 sm:mt-0">
      {/* start of information */}
      <div>
        <div className="text-[14px] sm:text-[16px] mt-2">Unit Name</div>

        <Input
          value={formData?.unit_name}
          onChange={(e) => {
            updateField("unit_name", e.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <div className="text-[14px] sm:text-[16px] mt-2">Unit Number</div>

        <Input
          value={formData?.unit_no}
          onChange={(e) => {
            updateField("unit_no", e.target.value);
          }}
        />
      </div>
      {/* start of numerical information */}
      <div className="mt-4 flex justify-between w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">
            Unit Size
          </div>
          <div className="max-w-[100px]">
            <Input
              value={formData?.unit_size}
              onChange={(e) => {
                updateField("unit_size", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">
            Beds
          </div>
          <div className="max-w-[100px]">
            <Input
              value={formData?.beds}
              onChange={(e) => {
                updateField("beds", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">
            Bath
          </div>
          <div className="max-w-[100px]">
            <Input
              value={formData?.bath}
              onChange={(e) => {
                updateField("bath", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">
            Unit Price
          </div>
          <div className="max-w-[100px]">
            <Input
              value={formData?.unit_price}
              onChange={(e) => {
                updateField("unit_price", e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* start of description */}
      <div>
        <div className="text-[14px] sm:text-[16px] mt-4">Description</div>
        <textarea
          rows={8}
          multiple={true}
          className="text-[14px] px-3 py-1 mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg outline-none"
          value={formData?.description}
          onChange={(e) => {
            updateField("description", e.target.value);
          }}
        />
      </div>
    </div>
  );
}
