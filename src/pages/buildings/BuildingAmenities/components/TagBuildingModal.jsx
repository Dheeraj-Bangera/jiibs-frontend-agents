import react from 'react';
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import ItemIMG from '../../../../assets/amenity_placeholder.png';

export default function ({ onClose }) {
    return (
            <div className='fixed inset-0 w-full h-full flex justify-center items-center bg-[#000000]/50 z-30' onClick={onClose} >
                <div className='w-[510px] rounded-t-[8px] sm:rounded-b-[8px] space-y-[20px] bg-white max-sm:w-full max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:top-[100px]'>
                    <div className='relative rounded-t-[8px] bg-[#F3F3F3] max-sm:bg-white px-[24px] py-[16px] flex jsutify-start max-sm:justify-center'>
                        <div className='text-[20px] font-semibold'>Tagged Buildings</div>
                        <div className='absolute top-[23px] sm:right-[23px] max-sm:left-[23px]' onClick={onClose}><IoMdClose /></div>
                    </div>
                    <div className='px-[24px]'>
                        <div className='h-[40px] border-[1px] border-stroke rounded-full px-[20px] flex items-center gap-x-3 bg-[#EEEEEE]'>
                            <IoIosSearch />
                            <input className='text-[#737373] text-[14px] outline-none bg-[#EEEEEE]' placeholder='Search Building'></input>
                        </div>
                    </div>
                    <div 
                        className='border-b-[1px] border-stroke'
                        onClick={(e) => {e.stopPropagation();}}
                    >
                        {new Array(4).fill(0).map((item, index) => (
                            <div
                                className='px-[24px] py-[8px] flex gap-x-[16px] items-center border-t-[1px] border-stroke'
                                key={index}
                            >
                                <input type='checkbox'></input>
                                <img
                                    className='w-[48px] h-[48px] object-cover rounded-[8px]'
                                    src={ItemIMG}
                                />
                                <div className='text-[16px]'>Building 1</div>
                            </div>
                        ))}
                        <div className='h-[60px] flex gap-x-[16px] pr-[24px] items-center justify-end border-t-[1px] border-stroke max-sm:hidden'>
                            <div className='border-[1px] border-[#A3A3A3] rounded-[6px] w-[64px] py-1 text-black text-[13px] font-semibold flex justify-center' onClick={onClose}>Cancle</div>
                            <div className='rounded-[6px] w-[64px] py-1 text-white text-[13px] bg-[#2AB7DD] font-semibold flex justify-center' onClick={onClose}>Save</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}