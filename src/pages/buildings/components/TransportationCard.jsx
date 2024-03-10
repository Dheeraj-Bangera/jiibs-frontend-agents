import React, { useState } from "react";

import TransportationItem from './TransportationItem';
import AddItem from "../../../components/AddItem/AddItem";
import RouteItem from "./RouteItem";

export default function TransportationCard() {
  const [itemCount, setItemCount] = useState(1);
  const handleAddItem = () => {
    // if(itemCount < 3)
      setItemCount(itemCount + 1);
  };
  return (
    <div className="bg-white py-4 px-5 rounded-lg shadow-sm max-sm:mb-4">
      <div>Transportation</div>
      <div className="relative mx-[-1.2rem] mt-3 h-[2px] bg-secondary"></div>
      {/* start of numerical information */}
      {new Array(itemCount).fill(0).map(() => {
        return <TransportationItem />
      })}
      {/* {itemCount !== 3 && */}
        <div className="flex justify-end mt-3 pr-3">
          <AddItem onClick={handleAddItem} title='ADD LOCATION' />
        </div>
      {/* } */}
    </div>
  );
}
