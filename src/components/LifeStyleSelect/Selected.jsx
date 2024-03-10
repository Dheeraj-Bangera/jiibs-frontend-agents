import react from 'react';
import { IoCloseOutline } from "react-icons/io5";

export default function(props) {
    return (
        <div className='px-[9px] py-[2px] bg-[#E3E3E3] rounded-[10px] flex gap-x-2 text-primary items-center'>
            <div className='text-[16px]'>{props.title}</div>
            <div onClick={props.onClose}><IoCloseOutline /></div>
        </div>
    )
}