import React from "react";
import Input from "../../../components/Input/Input";
import ImageAddComponent from "../../../components/ImageAddComponent/ImageAddComponent";
import Button from "../../../components/Button/Button";
import AddItem from "../../../components/AddItem/AddItem";
import Select from "../../../components/Select/Select";

export default function StatusCard({items,formData, updateField}) {
  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm">
      <div className="text-[16px] mt-2">Status</div>
      <div>
        <Select
          options={items}
          formData={formData}
          updateField={updateField}
        />
        {/* <select className="text-[14px] px-3 py-2 mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg outline-none">
          {items.map((item, index) => (
            <option value={`${item}`} key={index}>{item}</option>
          ))}
        </select> */}
      </div>
    </div>
  );
}
