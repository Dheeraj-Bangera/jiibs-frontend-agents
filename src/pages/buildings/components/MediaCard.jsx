import React, {useState} from "react";
import MediaCardComponent from "./MediaCardComponent";
import ImageAddComponent from "../../../components/ImageAddComponent/ImageAddComponent";

export default function MediaCard({ updateField }) {
  const [imageCnt, setImageCnt] = useState(0);

  const onSelectHandler = (e) => {
    setImageCnt(imageCnt + 1);
    const selectedFile = e.target.files[0];
    updateField('media', selectedFile);
  };
  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6">
      {/* start of information */}
      <div>
        <div className="text-[16px] mt-2">Media</div>
        <div className="mt-4 flex items-center flex-wrap justify-start">
        
          {imageCnt==0?<><ImageAddComponent 
            onSelect={ onSelectHandler} updateField={
              updateField
            }
          /></>:<MediaCardComponent/>}
        
          
        </div>
      </div>
    </div>
  );
}
