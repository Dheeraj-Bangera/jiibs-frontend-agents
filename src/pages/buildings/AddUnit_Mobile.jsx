import React from "react";
import ActionBar from "./components/ActionBar";
import InformationCard from "./components/InformationCard";
import MediaCard from "./components/MediaCard";
import StatusCard from "./components/StatusCard";
import ThumbnailCard from "./components/ThumbnailCard";
import DealsCard from "./components/DealsCard";
import OccupancyCard from "./components/OccupancyCad";
import FloorPlanCard from "./components/FloorPlanCard";
import SECard from "./BuildingAmenities/components/SECard";

export default function () {
    return (
        <div className="pt-4 w-full pb-10">
            <div className="mb-6">
                <ActionBar/>
            </div>
            <StatusCard
                items={['On Market', 'Leased', 'Draft']}
            />
            <InformationCard />
            <DealsCard />
            <OccupancyCard />
            <MediaCard />
            <FloorPlanCard />
            <ThumbnailCard />
            <SECard />
        </div>
    )
}