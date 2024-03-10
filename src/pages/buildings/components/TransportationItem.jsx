import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import AddItem from "../../../components/AddItem/AddItem";
import RouteItem from "./RouteItem";

export default function TransportionItem() {
    const [itemCount, setItemCount] = useState(1);
    const handleAddItem = () => {
        // if (itemCount < 3)
            setItemCount(itemCount + 1);
    };

    return (
        <div className="flex gap-x-8 justify-between w-full flex-wrap">
            <div className="mt-4 flex-grow flex gap-x-8">
                <div className="flex-grow">
                    <div className="text-[16px] mr-4">Location</div>
                    <div>
                        <Input/>
                    </div>
                </div>
                <div className="flex-grow">
                    <div className="text-[16px] mr-4">Distance</div>
                    <div>
                        <Input />
                    </div>
                </div>
            </div>
            <div className="mt-4 flex-grow">
                <div className="text-[16px] mr-4">Route</div>
                <div className="p-3 mt-2 pt-5 border rounded-lg">
                    {new Array(itemCount).fill(0).map(() => {
                        return <RouteItem />;
                    })}
                    {/* {itemCount !== 3 && */}
                        <div className="flex justify-end mt-1">
                            <AddItem onClick={handleAddItem} title='ADD ROUTE' />
                        </div>
                    {/* } */}
                </div>
            </div>
        </div>
    )
}