import React from "react";
import Button from "../../../../components/Button/Button";
import left_arrow from "../../../../assets/left_arrow.png";
import ic_back from "../../../../assets/ic_back.png";
import { useNavigate } from "react-router-dom";

export default function ActionBar({ title, isBack }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex items-center text-[16px] sm:text-[26px] font-semibold flex-grow">
        {/* {isBack && (
          <img
            src={ic_back}
            width={20}
            height={20}
            onClick={() => navigate(-1)}
          />
        )}
        <div>{title}</div> */}
      </div>
      <div className="flex items-center gap-x-4 justify-end">
        <Button style="secondary">View</Button>
        <Button style="secondary">
          <div className="flex items-center">
            More Options{" "}
            <img
              className="ml-2"
              style={{ rotate: "-90deg" }}
              src={left_arrow}
              width={10}
              height={10}
            ></img>
          </div>
        </Button>
      </div>
    </div>
  );
}
