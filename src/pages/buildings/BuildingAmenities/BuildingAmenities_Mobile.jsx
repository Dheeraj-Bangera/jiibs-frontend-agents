import React from "react";
import ActionBar from "./components/ActionBar";
import InformationCard from "./components/InformationCard";
import BuildingsCard from "./components/BuildingsCard";
import AmenitiesCard from "../components/AmenitiesCard";
import AmenitiesSelectCard from "../components/AmenitiesSelectCard";
import StatusCard from "../components/StatusCard";
import UploadCard from "./components/UploadCard";
import SECard from "./components/SECard";

export default function BuildingAmenities_Mobile({type}) {
  return (
    <div className="pt-4 w-full pb-10">
      <div className="mx-5 mb-5">
        <ActionBar title={type} isBack={true} />
      </div>
      <StatusCard
            items={['Active', 'Draft']}
      />
      <div className="mt-6">
        <InformationCard />
      </div>
      <BuildingsCard />
      <UploadCard />
      <SECard />
    </div>
  );
}
