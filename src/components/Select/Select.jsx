import react, {useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function Select(props) {
    const [value, setValue] = useState(props.options[0]);
    const [showDrop, setShowDrop] = useState(false);

    return (
        <div className='relative'>
            <div 
                className='text-[14px] px-3 py-2 mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg flex justify-between items-center'
                onClick={() => setShowDrop(true)}
            >
                <div>{value}</div>
                <IoIosArrowDown /> 
            </div>
            {showDrop &&(
                <>
                    <div 
                        className='fixed inset-0 bg-transparent' 
                        onClick={() => setShowDrop(false)}
                    >
                    </div>

                    <div className='absolute top-[40px] w-full border border-primary rounded-lg'>
                        {props.options.map((item, index) => (
                            <div 
                                className='text-[14px] px-3 py-1 rounded-lg  focus:border-gray-400 w-full text-dark flex justify-between items-center bg-white hover:bg-[#eeeeee]'
                                key={index}
                                onClick={() => {setValue(item); setShowDrop(false)}}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </>
            )
            }
        </div>
    )
}