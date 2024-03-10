import React from "react";
import { useNavigate } from "react-router-dom";

export default function (props) {
  return (
    <div className="w-full flex justify-between max-sm:px-3">
      <div className="text-[26px] text-primary font-semibold max-sm:text-[26px] sm:leading-[80%]">
        {props.type}
      </div>
      <button
        className="bg-primary text-white text-[16px] px-[24px] py-[8px] rounded-[4px] max-sm:px-[13px] max-sm:py-[6px] max-sm:text-[12px]"
        onClick={props.handleOnAdd}
      >
        Create Filter
      </button>
    </div>
  );
}
