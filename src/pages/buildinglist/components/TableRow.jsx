import React from "react";
import ItemIMG from "../../../assets/item.png";
import StatusItem from "./StatusItem";
import { useNavigate } from "react-router-dom";

export default function (props) {
    const navigate = useNavigate();
    return (
        <div
            className='relative border-t-[1px] border-stroke h-[76px] flex justify-between max-sm:relative  max-sm:flex-col max-sm:pl-[68px] text-primary max-sm:justify-center max-sm:gap-y-1'
         onClick = {() => navigate('../edit_building')}
        >
            <img
                src={ItemIMG}
                className='sm:hidden w-[36px] h-[36px] absolute top-[21px] left-[16px]'
            />
            <div className='flex-none flex items-center max-sm:w-full w-[330px]'>
                <div className='w-[64px] flex justify-center items-center max-sm:hidden'><input type="checkbox" checked={props.checked} onChange={props.onChange} /></div>
                <div className='flex justify-start gap-x-[32px] px-2 items-center max-sm:w-full max-sm:items-start max-sm:px-0'>
                    <div className='text-[16px] max-sm:font-semibold max-sm:text-[14px]'>{props.buildingname}</div>
                </div>
            </div>
            <div className='flex items-center text-[11px] sm:text-[16px] gap-x-[15px] sm:gap-x-0'>
                <div className='sm:w-[230px] flex justify-center items-center'>{props.neighborhood}</div>
                <div className='sm:w-[230px] flex justify-center items-center'>{props.units}</div>
                <div className='sm:w-[230px] flex justify-center items-center'>{props.yearbuilt}</div>
            </div>
        </div>
    );
}
