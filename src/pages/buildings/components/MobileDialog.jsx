import React, {useState} from 'react';
import { FaAngleRight } from "react-icons/fa6";

import AmenitiesDialog from './AmenitiesDialog';

export default function() {
    const [amenityDlgShow, setAmenityDlgShow] = useState(false);
    const [lifeStyleDlgShow, setLifeStyleDlgShow] = useState(false);

    return (
        <div className='w-full bg-white px-[16px] py-[14px] space-y-[14px] text-primary my-[12px]'>
            <div className='w-full flex justify-between items-center' onClick={() => setAmenityDlgShow(true)}>
                <div className='space-y-[7px]'>
                    <div className='text-[16px]'>Amenities</div>
                    <div className='text-[12px] text-dark'>List 1, List 2, List 3 </div>
                </div>
                <div className='text-[#CBCBCB] text-[20px]'><FaAngleRight /></div>
            </div>
            <div className='w-full h-[1px] bg-[#E4E4E4]'></div>
            <div className='w-full flex justify-between items-center' onClick={() => setLifeStyleDlgShow(true)}>
                <div className='space-y-[7px]'>
                    <div className='text-[16px]'>LifeStyle</div>
                    <div className='text-[12px] text-dark'>List 1, List 2, List 3 </div>
                </div>
                <div className='text-[#CBCBCB] text-[20px]'><FaAngleRight /></div>
            </div>
            {amenityDlgShow && <AmenitiesDialog title='Amenities' onClose={() => setAmenityDlgShow(false)} />}
            {lifeStyleDlgShow && <AmenitiesDialog title='LifeStyle' onClose={() => setLifeStyleDlgShow(false)} />}
        </div>
    )
}