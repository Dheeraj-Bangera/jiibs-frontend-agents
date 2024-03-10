import React from 'react';

export default function (props) {
    return (
        <>
            {props.value == "On-Market" && <span className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs">On-Market</span>}
            {props.value == "Leased" && <span className="bg-gray-200 text-black py-1 px-3 rounded-full text-xs">Leased</span>}
        </>
    )
}