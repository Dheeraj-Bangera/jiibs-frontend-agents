import React from "react";
import ActionBar from "./components/ActionBar";
import InformationCard from "./components/InformationCard";
import MediaCard from "./components/MediaCard";
import AmenitiesCard from "./components/AmenitiesCard";
import AmenitiesSelectCard from "./components/AmenitiesSelectCard";
import StatusCard from "./components/StatusCard";
import ThumbnailCard from "./components/ThumbnailCard";

export default function AddBuilding_Mobile() {
  return (
    <div className="pt-4 w-full pb-10">
      <div className="mb-6">
        <ActionBar title={"Add Building"} />
      </div>
      <StatusCard 
        items={['Active', 'Draft']}
      />
      <InformationCard />
      <AmenitiesSelectCard />
      <MediaCard />
      <AmenitiesCard />
      <ThumbnailCard />
    </div>
  );
}
