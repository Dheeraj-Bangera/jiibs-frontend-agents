import React from 'react';
import ItemIMG from "../../../assets/amenity_placeholder.png";

export default function({checked, onChange}) {
    return (
        <div className='flex w-full h-[76px] justify-between items-center bg-white text-[16px] text-primary border-t-[1px] border-stroke max-sm:h-[60px] max-sm:py-3 max-sm:px-4 max-sm:border-0 max-sm:border-y-[1px] max-sm:text-[14px]'>
            <div className='flex'>
                <div className='flex justify-center items-center w-[64px] max-sm:hidden max-sm:w-auto'>
                    <input type='checkbox' className='w-[25px] h-[25px]' checked={checked} onChange={onChange}/>
                </div>
                <div className='flex justify-start items-center w-[88px] pl-2 max-sm:w-[52px] max-sm:pl-0'>
                    <img className="rounded-md w-[48px] h-[48px] max-sm:w-9 max-sm:h-9" src={ItemIMG} alt="Item image" />
                </div>
            </div>
            <div className='flex grow justify-between max-sm:flex-col max-sm:gap-y-1'>
                <div className='flex items-center'>
                    List1
                </div>
                <div className='flex gap-x-[30px] max-sm:text-[11px] max-sm:gap-x-[18px]'>
                    <div className='w-[120px] flex justify-center items-center max-sm:w-auto'>
                        8
                        <span className='hidden max-sm:block pl-1'>Building</span>
                    </div>
                    <div className='w-[120px] flex justify-center items-center max-sm:w-auto'>
                        14
                        <span className='hidden max-sm:block pl-1'>Units</span>
                    </div>
                </div>
            </div>            
        </div>
    )
}