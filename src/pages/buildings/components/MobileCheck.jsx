import react, {useState} from 'react';
import { IoCheckmark } from "react-icons/io5";

export default function(props) {
    const [checked, setChecked] = useState(props.checked);
    return (
        <div 
            className='w-full flex justify-between items-center pb-[12px] border-b-[1px] text-primary'
            onClick={() => {checked ? setChecked(false) : setChecked(true)}}
        >
            <div>{props.title}</div>
            {checked && <div><IoCheckmark /></div>}
        </div>
    )
}