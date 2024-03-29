import React, { useState } from "react";
import placeholder1 from "../../../assets/placeholder1.png";
import LivingRoomModal from "../../../components/LivingRoomModal/LivingRoomModal";

export default function MediaCardComponent({image}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-primary rounded-lg mr-3 sm:mr-5 mb-3 w-[146px] h-[146px] sm:w-[146px] sm:h-[146px] p-1 sm:p-2">
      <img
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg object-cover w-full h-full"
        src={URL.createObjectURL(image)}
      ></img>
      <LivingRoomModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
