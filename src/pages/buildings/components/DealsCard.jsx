import React from "react";
import Input from "../../../components/Input/Input";


export default function DealsCard() {
  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6">
      <div className="text-[16px] mt-2">Deals</div>
      <div>
        <Input />
        {/* <select className="text-[14px] px-3 py-2 mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg outline-none">
          <option value="nONE">N/A</option>
          <option value="Disabled">Disabled</option>
          <option value="Reserved">Reserved</option>
        </select> */}
      </div>
    </div>
  );
}
