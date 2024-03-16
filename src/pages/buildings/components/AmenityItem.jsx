import React, { useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import placeholder1 from "../../../assets/placeholder1.png";


export default function AmenityItem({setAmenities,amenities, index}) {

  const [showImg, setShowImg] = useState(false);
  const [amenity, setAmenity] =useState({image:null,title:"",subtitle:""});
  useEffect(() => {
    
    setAmenities((prev)=>{
      prev[index]=amenity
    return prev});
    
  }, [amenity])
  
  return (
    <div className='w-full'>
      <div className="flex mt-5 w-full items-center">
        <div className="border border-primary rounded-lg mr-3 sm:mr-5 mb-3">
          <div className="relative rounded-lg flex flex-col items-center justify-center w-[146px] h-[146px] sm:w-[146px] sm:h-[146px] p-1 sm:p-2">
            {!showImg && <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
              <div className="cursor-pointer text-dark hover:text-primary text-[12px] relative">
                Add
                <input
                  type="file"
                  className="absolute left-0 right-0 bottom-0 top-0 opacity-0 cursor-pointer"
                  onChange={() => setShowImg(true)}
                />
              </div>
              <div className=" text-dark hover:text-primary text-[12px]">
                Add from URL
              </div>
            </div>}
            {showImg && <img
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg object-cover w-full h-full"
              src={URL.createObjectURL(amenity.image)}
            />}
          </div>
        </div>

        <div className="w-full">
          <div>
            <div className="text-[14px] sm:text-[16px]">Title</div>
            <Input value={amenity.title} 
            onChange={(e) => {
              setAmenity({...amenity,title:e.target.value})}}/>
          </div>
          <div className="mt-1 sm:mt-2">
            <div className="text-[14px] sm:text-[16px]">Subtitle</div>
            <Input value={amenity.subtitle} 
            onChange={(e) => {
              setAmenity({...amenity,subtitle:e.target.value})}}/>
          </div>
        </div>
      </div>
      <Button style="secondary text-[12px] mt-3 font-semibold relative">
        Choose Media
        <input
          type='file'
          className='absolute left-0 top-0 right-0 bottom-0 opacity-0'
          onChange={(e) => {setShowImg(true)
            setAmenity({...amenity,image:e.target.files[0]})}}
        />
      </Button>
    </div>
  );
}
