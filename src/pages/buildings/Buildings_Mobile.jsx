import React from "react";
import ActionBar from "./components/ActionBar";
import InformationCard from "./components/InformationCard";
import MediaCard from "./components/MediaCard";
import AmenitiesCard from "./components/AmenitiesCard";
import AmenitiesSelectCard from "./components/AmenitiesSelectCard";
import StatusCard from "./components/StatusCard";
import ThumbnailCard from "./components/ThumbnailCard";

export default function Buildings_Mobile({ formData, updateField }) {
  return (
    <div className="pt-4 mx-0 w-full">
      <div className="mr-6">
        <ActionBar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
        <StatusCard items={["Active", "Draft"]} />
        <InformationCard formData={formData} updateField={updateField} />
        <AmenitiesSelectCard />
        <MediaCard />
        <AmenitiesCard />
        <ThumbnailCard />
      </div>
    </div>
  );
}
