import React, {useState} from "react";
import BuildingRow from "./BuildingRow";
import placeholder from "../../../../assets/placeholder1.png";
import Button from "../../../../components/Button/Button";
import TagBuildingModal from "./TagBuildingModal";

export default function BuildingsCard() {
  const [buildings, setBuildings] = useState(['Building 1', 'Building 2', 'Building 3', 'Building 4', 'Building 5']);
  const [showTagModal, setShowTagModal] = useState(false);

  const handleDelete = (title) => {
    setBuildings(buildings.filter(item => item !== title));
  }

  const handleOpenModal = () => {
    setShowTagModal(true);
    document.body.style.overflow = 'hidden';
  }

  const handleCloseModal = () => {
    setShowTagModal(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="bg-white rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6 pb-5">
      <div className="text-[16px] mt-2 pt-4 px-5">Buildings</div>

      <div className="relative my-4 px-5">
        <div className="flex">
          <input
            className="w-full h-[38px] border-stroke border rounded-lg pl-[40px] outline-none focus:border-gray-600"
            placeholder="Search Amenities"
          />
          <div className="ml-3">
            <button className="border rounded-lg px-6 h-[38px] hover:bg-gray-100" onClick={handleOpenModal}>
              Browse
            </button>
          </div>
        </div>
        <span className="absolute left-[30px] top-[7px]">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div className="border-b border-primary relative">
        {buildings.map((title, index) => (
          <BuildingRow 
            id={index+1}
            key={index}
            title={title}
            src={placeholder}
            onClose={() => handleDelete(title)}
          />
        ))}
      </div>

      {showTagModal &&
        <TagBuildingModal 
          onClose={handleCloseModal}
        />
      }
    </div>
  );
}
