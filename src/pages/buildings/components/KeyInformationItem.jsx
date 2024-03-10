import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import placeholder1 from "../../../assets/placeholder1.png";


export default function AmenityItem() {

  const [showImg, setShowImg] = useState(false);

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
              src={placeholder1}
            />}
          </div>
        </div>

        <div className="w-full">
          <div>
            <div className="text-[14px] sm:text-[16px]">Title</div>
            <Input />
          </div>
          <div className="mt-1 sm:mt-2">
            <div className="text-[14px] sm:text-[16px]">Subtitle</div>
            <Input />
          </div>
        </div>
      </div>
      <Button style="secondary text-[12px] mt-3 font-semibold relative">
        Choose Media
        <input
          type='file'
          className='absolute left-0 top-0 right-0 bottom-0 opacity-0'
          onChange={() => setShowImg(true)}
        />
      </Button>
    </div>
  );
}
