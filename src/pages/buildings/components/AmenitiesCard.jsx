import React, { useEffect, useState } from "react";
import AddItem from "../../../components/AddItem/AddItem";
import AmenityItem from "./AmenityItem";

export default function AmenitiesCard({ updateField }) {
  const [itemCount, setItemCount] = useState(1);
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    updateField("amenities", amenities);
  }, [amenities]);

  const handleAddItem = () => {
    // if(itemCount < 3)
    setItemCount(itemCount + 1);
    setAmenities((prevItems) => {
      return [...prevItems, { image: null, title: "", subtitle: "" }];
    });
  };

  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6 mb-6">
      <div>Amenities</div>
      <div className="relative mx-[-1.2rem] mt-3 h-[2px] bg-secondary"></div>

      {new Array(itemCount).fill(0).map((_, index) => {
        return (
          <AmenityItem
            key={"amneties" + index}
            index={index}
            amenities={amenities}
            setAmenities={setAmenities}
          />
        );
      })}
      {/* {itemCount !== 3 && */}
      <div className="mt-3 flex">
        <AddItem onClick={handleAddItem} />
      </div>
      {/* } */}
    </div>
  );
}
