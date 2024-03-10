import react from 'react';
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import MobileCheck from './MobileCheck';

export default function(props) {

    return (
        <div>
            <div className='fixed inset-0 bg-[#000000] opacity-[52%]' onClick={props.onClose}/>
            <div className='fixed left-0 right-0 bottom-0 h-[600px] bg-white z-10 rounded-t-[20px] px-[16px] py-[20px] space-y-[36px]'>
                <div className='w-full relative flex justify-center text-[20px] font-semibold'>
                    <div>{props.title}</div>
                    <div className='absolute left-0 top-[5px]' onClick={props.onClose}><IoMdClose /></div>
                </div>
                <div className='rounded-[14px] bg-[#EEEEEE] px-[10px] py-[8px] text-[#848486] flex gap-x-2'>
                    <div className='text-[22px]'><IoIosSearch /></div>
                    <input type='text' placeholder='Search or add Amenitnies' className='text-[16px] bg-transparent outline-none'></input>
                </div>
                <div className='space-y-3'>
                    <MobileCheck 
                        title='List1'
                        checked={true}
                    />
                    <MobileCheck 
                        title='List2'
                    />
                    <MobileCheck 
                        title='List3'
                    />
                </div>
            </div>
        </div>
    )
}