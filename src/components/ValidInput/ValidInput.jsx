import React, { useState } from "react";
import ValidationErrorIcon from "../Icons/ValidationErrorIcon";
import EyeIcon from "../Icons/EyeIcon";

export default function ValidInput({
  placeholder,
  error,
  errorColor,
  type,
  inputName,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex flex-col gap-[4px]">
      <label
        className="text-[14px] leading-[20px] text-[#2F2F2F] font-normal"
        htmlFor={inputName}
      >
        {inputName}
      </label>
      <input
        type={type ? (showPassword ? "text" : type) : "text"}
        placeholder={placeholder}
        id={inputName}
        className="text-[14px] px-[16px] h-[45px] sm:h-[44px] border border-[#626262] focus:border-black w-full text-blackdark rounded-lg outline-none"
        style={{ paddingRight: type === "password" && "40px" }}
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
        <div className="flex gap-x-3 mt-3 items-center">
          <ValidationErrorIcon color={errorColor} />
          <div className="text-[14px]" style={{ color: errorColor }}>
            {error}
          </div>
        </div>
      )}
    </div>
  );
}
