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

export default function AddUnit() {
  return (
    <>
      <div className="pt-12 mx-6 w-full max-sm:pt-4 sm:block hidden">
        <ActionBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="col-span-1 lg:col-span-2">
            <InformationCard />
            <MediaCard />
          </div>
          <div>
            <StatusCard 
              items={['On Market', 'Leased', 'Draft']}
            />
            <DealsCard />
            <OccupancyCard />
            <FloorPlanCard />
            <ThumbnailCard />
          </div>
        </div>
      </div>
      <div className='w-full sm:hidden'>
        <AddUnit_Mobile />
      </div>
    </>
  );
}
