import React, { useState } from "react";
import ValidationErrorIcon from "../Icons/ValidationErrorIcon";
import EyeIcon from "../Icons/EyeIcon";

export default function ValidInput({
  value,
  setValue,
  placeholder,
  error,
  type,
  inputName,
  onBlurHandler,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex flex-col gap-[4px]">
      <label
        className="text-[14px] leading-[20px] text-[#2F2F2F] font-normal"
        htmlFor={inputName.split(" ").join("-")}
      >
        {inputName}
      </label>
      <input
        type={type ? (showPassword ? "text" : type) : "text"}
        placeholder={placeholder}
        id={inputName.split(" ").join("-")}
        className="text-[14px] px-[16px] h-[45px] sm:h-[44px] border border-[#626262] focus:border-black w-full text-blackdark rounded-lg outline-none"
        style={{ paddingRight: type === "password" && "40px" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => onBlurHandler(e.target.value)}
      />
      {type === "password" && (
        <div
          className="absolute right-[12px] top-[39px]  flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          <EyeIcon color={showPassword ? "#2AB7DD" : "#626262"} />
        </div>
      )}
      {error && error.length !== 0 && (
        <div className="flex gap-x-3  items-center">
          <ValidationErrorIcon color={"#EE352E"} />
          <div className="text-[14px]" style={{ color: "#EE352E" }}>
            {error}
          </div>
        </div>
      )}
    </div>
  );
}
