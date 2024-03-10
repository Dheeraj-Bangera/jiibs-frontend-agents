import React from 'react';

export default function ({onChange}) {
    return (
        <div className='bg-[#F7F7F7] border-stroke h-[46px] flex justify-between max-sm:hidden text-black'>
            <div className='flex-none flex items-center w-[330px]'>
                <div className='w-[64px] flex justify-center items-center'><input type="checkbox" onChange={onChange}/></div>
                <div className='flex justify-start gap-x-[32px] px-2 items-center'>
                    <div className='max-sm:ml-20 text-[14px] max-sm:font-semibold max-sm:text-[14px]'>Building Name</div>
                </div>
            </div>
            <div className='flex items-center text-[14px]'>
                <div className='w-[230px] flex justify-center items-center'>Neighborhood</div>
                <div className='w-[230px] flex justify-center items-center'>Units</div>
                <div className='w-[230px] flex justify-center items-center'>Year Built</div>
            </div>
        </div>
    )
}