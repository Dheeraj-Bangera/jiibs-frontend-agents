import React from "react";
import ActionBar from "./components/ActionBar";
import InformationCard from "./components/InformationCard";
import MediaCard from "./components/MediaCard";
import StatusCard from "./components/StatusCard";
import ThumbnailCard from "./components/ThumbnailCard";
import DealsCard from "./components/DealsCard";
import OccupancyCard from "./components/OccupancyCad";
import FloorPlanCard from "./components/FloorPlanCard";
import AddUnit_Mobile from "./AddUnit_Mobile";
import useFormState from "../../hooks/useFormState";
import InformationCardUnit from "./components/InformationCardUnit";
import ActionBarUnit from "./components/ActionBarUnit";

export default function AddUnit() {
  const [formData, updateField] = useFormState({
    unit_name: "",
    unit_no: "",
    unit_size: "",
    beds: "",
    bath: "",
    status: "Draft",
    description: "",
    thumbnail: null,
    deals:"",
    unit_price:"",
    floor_plan:null,
    userData:{id:"65e0d757790c1e6bb8281100"},
  });
  return (
    <>
      <div className="pt-12 mx-6 w-full max-sm:pt-4 sm:block hidden">
        <ActionBarUnit formData={formData} updateField={updateField}/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="col-span-1 lg:col-span-2">
            <InformationCardUnit formData={formData} updateField={updateField} />
            <MediaCard  updateField={updateField}/>
          </div>
          <div>
            <StatusCard 
              items={['On Market', 'Leased', 'Draft']}
              updateField={updateField}/>
            <DealsCard updateField={updateField}/>
            <OccupancyCard />
            <FloorPlanCard updateField={updateField}/>
            <ThumbnailCard updateField={updateField}/>
          </div>
        </div>
      </div>
      <div className='w-full sm:hidden'>
        <AddUnit_Mobile />
      </div>
    </>
  );
}
