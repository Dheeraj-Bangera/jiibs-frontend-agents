import React, {useState} from "react";
import MediaCardComponent from "./MediaCardComponent";
import ImageAddComponent from "../../../components/ImageAddComponent/ImageAddComponent";

export default function FloorPlanCard() {
  const [imageCnt, setImageCnt] = useState(0);
  return (
    <div className="bg-white py-4 px-5 rounded-lg shadow-sm mt-6 mb-6">
      <div>Floor Plan</div>
      <div className="relative mx-[-1.2rem] mt-3 h-[2px] bg-secondary"></div>
      {/* <div className="mt-2">
          <div className="relative cursor-pointer text-dark hover:text-primary text-[12px]">
          Add
          <input
            type="file"
            className="absolute left-0 right-0 bottom-0 top-0 opacity-0 cursor-pointer"
          />
        </div>
        <div className="text-dark hover:text-primary text-[12px]">
          Add from URL
        </div>
        </div>
      </div> */}
      <div className="mt-4 flex items-center flex-wrap justify-start">
        {new Array(imageCnt).fill(0).map((item, index) => (
          <MediaCardComponent key={index} />
        ))}
        <ImageAddComponent
          onSelect={() => setImageCnt(imageCnt + 1)}
        />
      </div>
    </div>
  );
}
