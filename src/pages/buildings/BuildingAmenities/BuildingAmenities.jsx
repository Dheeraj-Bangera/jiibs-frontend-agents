import React from "react";
import ActionBar from "./components/ActionBar";
import InformationCard from "./components/InformationCard";
import BuildingsCard from "./components/BuildingsCard";
import AmenitiesCard from "../components/AmenitiesCard";
import AmenitiesSelectCard from "../components/AmenitiesSelectCard";
import StatusCard from "../components/StatusCard";
import UploadCard from "./components/UploadCard";
import SECard from "./components/SECard";
import BuildingAmenities_Mobile from "./BuildingAmenities_Mobile";

export default function BuildingAmenities({type}) {
  return (
    <>
      <div className="pt-12 mx-6 w-full sm:block hidden">
        <ActionBar title={type} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="col-span-1 lg:col-span-2">
            <InformationCard />
            <BuildingsCard />
            <SECard />
          </div>
          <div>
            <StatusCard 
              items={['Active', 'Draft']}
            />
            <UploadCard />
          </div>
        </div>
      </div>
      <div className="w-full block sm:hidden">
        <BuildingAmenities_Mobile 
          type={type}
        />
      </div>
    </>
  );
}
