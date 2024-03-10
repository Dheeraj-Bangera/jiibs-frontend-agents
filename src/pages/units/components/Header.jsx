import React from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const handleOnAdd = () => {
    navigate("/add_unit");
  };
  return (
    <div className="w-full flex justify-between max-sm:px-3">
      <div className="text-[26px] text-primary font-semibold max-sm:text-[26px] sm:leading-[80%]">
        Units
      </div>
      <button
        className="bg-primary text-white text-[16px] px-[24px] py-[8px] rounded-[4px] max-sm:px-[13px] max-sm:py-[6px] max-sm:text-[12px]"
        onClick={handleOnAdd}
      >
        Add Units
      </button>
    </div>
  );
}
