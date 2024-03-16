import React, {useState} from "react";
import ThumbnailCardComponent from "./ThumbnailCardComponent";
import ImageAddComponent from "../../../components/ImageAddComponent/ImageAddComponent";

export default function ThumbnailCard({updateField}) {
  const [imageShow, setImageShow] = useState(false);
   const onSelectHandler = (e)=>{
    setImageShow(true)
    const selectedFile = e.target.files[0];
    updateField('thumbnail', selectedFile);
    

   }
  return (
    <div className="bg-white py-4 px-5 rounded-lg shadow-sm mt-6 mb-6">
      <div>Thumbnail</div>
      <div className="relative mx-[-1.2rem] mt-3 h-[2px] bg-secondary"></div>
      <div className="mt-2 relative">
        <div className="mt-4 flex items-center flex-wrap justify-start">
          {imageShow && <ThumbnailCardComponent />}
          {!imageShow &&
            <ImageAddComponent 
              onSelect={onSelectHandler}
            />
          }
        </div>
      </div>
      <div className="text-[12px] mt-2 text-secondary">
        Click the image to edit or update<br/>
        Recommended Size 1080x1080
      </div>
    </div>
  );
}
