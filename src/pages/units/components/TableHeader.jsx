import React from 'react';

export default function ({onChange}) {
    return (
        <div className='w-full bg-[#F7F7F7] border-stroke h-[46px] flex justify-between max-sm:hidden text-black'>
            <div className='grow flex items-center w-[30%]'>
                <div className='w-[64px] flex justify-center items-center'><input type="checkbox"  onChange={onChange} /></div>
                <div className='grow flex justify-start gap-x-[32px] px-2 items-center'>
                    <div
                        className='w-[48px] h-[48px] max-sm:absolute max-sm:top-2 max-sm:left-2 max-sm:w-[36px] max-sm:h-[36px]'
                    />
                    <div className='max-sm:ml-20 text-[14px] max-sm:font-semibold max-sm:text-[14px] w-[100px]'>Buildings</div>
                    <div className='grow flex justify-center'>
                        <div className='max-sm:ml-20 text-[14px] max-sm:font-semibold max-sm:text-[14px]'>Units</div>
                    </div>
                </div>
            </div>
            <div className='flex items-center text-[14px]'>
                <div className='w-[131px] flex justify-center items-center max-sm:absolute max-sm:right-2 max-sm:top-2'>
                    Status
                </div>
                <div className='flex items-center max-sm:flex-col max-sm:items-start'>
                    <div className='w-[131px] flex justify-center items-center'>Occupancy</div>
                    <div className='flex items-center justify-center max-sm:gap-x-5'>
                        <div className='w-[131px] flex justify-center items-center'>Beds</div>
                        <div className='w-[131px] flex justify-center items-center'>Baths</div>
                        <div className='w-[131px] flex justify-center items-center'>Price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}