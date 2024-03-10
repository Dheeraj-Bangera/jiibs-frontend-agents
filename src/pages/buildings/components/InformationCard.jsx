import React from "react";
import Input from "../../../components/Input/Input";

export default function InformationCard({ formData, updateField }) {
  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6 sm:mt-0">
      {/* start of information */}
      <div>
        <div className="text-[14px] sm:text-[16px] mt-2">Building Name</div>

        <Input
          value={formData?.building_name}
          onChange={(e) => {
            updateField("building_name", e.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <div className="text-[14px] sm:text-[16px] mt-2">Address</div>
        <Input
          value={formData?.address}
          onChange={(e) => {
            updateField("address", e.target.value);
          }}
        />
      </div>
      {/* start of numerical information */}
      <div className="mt-4 flex justify-between w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">
            Building Stories
          </div>
          <div className="max-w-[100px]">
            <Input
              value={formData?.floor}
              onChange={(e) => {
                updateField("floor", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">
            Year Built
          </div>
          <div className="max-w-[100px]">
            <Input
              value={formData?.year_of_build}
              onChange={(e) => {
                updateField("year_of_build", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-[14px] sm:text-[16px] mr-3 whitespace-nowrap">
            Total Units
          </div>
          <div className="max-w-[100px]">
            <Input
              value={formData?.total_units}
              onChange={(e) => {
                updateField("total_units", e.target.value);
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
