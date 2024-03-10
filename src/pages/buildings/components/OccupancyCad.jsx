import React, {useState} from "react";
import Calendar from 'react-calendar';
import "./Calendar.css"

export default function OccupancyCard() {

  const [activeFlag, setActiveFlag] = useState(false);

  return (
    <div className="bg-white shadow-sm mt-6 mb-6 border-[1px] border-stroke rounded-[8px] max-sm:border-none max-sm:rounded-[0px]">
      <div className="flex justify-start items-center h-[56px] pl-[14px] text-[16px] border-b-[1px] border-stroke max-sm:h-[44px]">
        <div>Occupancy</div>
      </div>
      <div className='flex flex-col p-[13px] rounded-2 gap-y-[13px] w-full'>
        <div className={`${activeFlag ? 'pointer-events-none' : ''}`}>
          <Calendar />
        </div>
        <div className='flex text-[16px] gap-x-[10px] items-center'>
          <input type="checkbox" id='immediate' onChange={(e) => {setActiveFlag(e.target.checked)}}></input>
          <label htmlFor='immediate'>Immediate</label>
        </div>
      </div>
    </div>
  );
}
