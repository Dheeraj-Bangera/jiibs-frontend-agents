import React from "react";
import Checkbox from "../../../components/CheckBox/CheckBox";
import AmenityModal from "../../../components/AmenityModal/AmenityModal";

export default function AmenitiesSelectCard() {
  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6 mb-6">
      <div className="flex justify-between items-center">
        <div>Amenities</div>
        <div className="text-[12px] cursor-pointer">
          <AmenityModal />
        </div>
      </div>
      <div className="relative mx-[-1.2rem] mt-3 h-[2px] bg-secondary"></div>
      <div className="mt-2">
        <Checkbox text="Gym" />
        <Checkbox text="Co-working space" />
        <Checkbox text="Rooftop Terrace" />
        <Checkbox text="24/7 Doorman" />
        <Checkbox text="Concierge" />
        <Checkbox text="Rooftop Lounge" />
        <Checkbox text="Golf Simulator" />
        <Checkbox text="Pool" />
      </div>
    </div>
  );
}
