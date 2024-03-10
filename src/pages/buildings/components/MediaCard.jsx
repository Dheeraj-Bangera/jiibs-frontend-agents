import React, {useState} from "react";
import MediaCardComponent from "./MediaCardComponent";
import ImageAddComponent from "../../../components/ImageAddComponent/ImageAddComponent";

export default function MediaCard() {
  const [imageCnt, setImageCnt] = useState(0);

  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6">
      {/* start of information */}
      <div>
        <div className="text-[16px] mt-2">Media</div>
        <div className="mt-4 flex items-center flex-wrap justify-start">
          {new Array(imageCnt).fill(0).map((item, index) => (
            <MediaCardComponent key={index}/>
          ))}
          <ImageAddComponent 
            onSelect={() => setImageCnt(imageCnt+1)}
          />
        </div>
      </div>
    </div>
  );
}
