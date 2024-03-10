import React from 'react';

export default function (props) {
    return (
        <button 
            className={`px-3 py-1 text-black whitespace-nowrap ${props.current === props.title ? 'bg-black text-white' : 'hover:bg-secondary'} rounded-md`}
            onClick={(e)=>props.onClick(props.title)}
        >
            {props.title}
        </button>
    )
}