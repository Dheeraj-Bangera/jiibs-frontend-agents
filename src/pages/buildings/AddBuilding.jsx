import React from "react";
import ActionBar from "./components/ActionBar";
import InformationCard from "./components/InformationCard";
import MediaCard from "./components/MediaCard";
import AmenitiesCard from "./components/AmenitiesCard";
import AmenitiesSelectCard from "./components/AmenitiesSelectCard";
import StatusCard from "./components/StatusCard";
import ThumbnailCard from "./components/ThumbnailCard";
import KeyInformationCard from "./components/KeyInformationCard";
import TransportationCard from "./components/TransportationCard";
import LifestyleCard from "./components/LifestyleCard";
import AddBuilding_Mobile from "./AddBuilding_Mobile";
import SECard from "./BuildingAmenities/components/SECard";
import useFormState from "../../hooks/useFormState";

export default function AddBuilding(props) {
  const [formData, updateField] = useFormState({
    building_name: "",
    address: "",
    floors: "",
    total_units: "",
    year_of_build: "",
    status: "",
    description: "",
    thumbnail: "",
  });
  return (
    <>
      <div className="pt-12 mx-6 w-full sm:block hidden">
        <ActionBar
          title={props.type == "edit" ? "Add Building" : ""}
          formData={formData}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="col-span-1 lg:col-span-2">
            <InformationCard formData={formData} updateField={updateField} />
            <MediaCard />
            <AmenitiesCard />
          </div>
          <div>
            <StatusCard items={["Active", "Draft"]} />
            <AmenitiesSelectCard />
            <ThumbnailCard />
          </div>
        </div>
      </div>
      <div className="block sm:hidden w-full">
        <AddBuilding_Mobile formData={formData} updateField={updateField} />
      </div>
    </>
  );
}
