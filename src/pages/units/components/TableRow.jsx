import React from "react";
import ItemIMG from "../../../assets/item.png";
import StatusItem from "./StatusItem";
import { useNavigate } from "react-router-dom";

export default function (props) {
    const navigate = useNavigate();
    return (
        <div 
            className='w-full border-t-[1px] border-stroke h-[76px] flex justify-between max-sm:relative  max-sm:flex-col max-sm:pl-[68px] text-primary max-sm:justify-center max-sm:gap-y-1'
            onClick = {() => navigate('../add_unit')}
        >
            <div className='sm:grow flex items-center max-sm:w-full w-[30%]'>
                <div className='w-[64px] flex justify-center items-center max-sm:hidden'><input type="checkbox" className="w-[21px] h-[21px] max-sm:hidden"  checked={props.checked} onChange={props.onChange}/></div>
                <div className='grow flex justify-start gap-x-[32px] max-sm:gap-x-[10px] px-2 items-center max-sm:w-full max-sm:items-start max-sm:px-0'>
                    <img
                        src={ItemIMG}
                        className='w-[48px] h-[48px] max-sm:absolute max-sm:top-[21px] max-sm:left-[16px] max-sm:w-[36px] max-sm:h-[36px]'
                    />
                    <div className='text-[16px] max-sm:font-semibold max-sm:text-[14px] sm:w-[100px]'>{props.title}</div>
                    <div className='grow flex justify-center max-sm:justify-start'>
                        <div className='text-[16px] max-sm:font-semibold max-sm:text-[14px]'>{props.units}</div>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='w-[131px] flex justify-center items-center max-sm:absolute max-sm:right-4 max-sm:top-3 max-sm:h-[18px] max-sm:w-auto'>
                    <StatusItem
                        value={props.status}
                    />
                </div>
                <div className='flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:text-[11px] max-sm:gap-y-1'>
                    <div className='w-[131px] flex justify-center items-center max-sm:justify-start'>{props.occupancy}<span className='hidden ml-1 max-sm:block'>Occupany</span></div>
                    <div className='flex items-center justify-center max-sm:gap-x-4'>
                        <div className='w-[131px] flex justify-center items-center max-sm:w-[30px]'>{props.beds}<span className='hidden ml-1 max-sm:block'>Bed</span></div>
                        <div className='w-[131px] flex justify-center items-center max-sm:w-[30px]'>{props.baths}<span className='hidden ml-1 max-sm:block'>Bath</span></div>
                        <div className='w-[131px] flex justify-center items-center max-sm:w-[30px]'>{props.price}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}
