import React, {useState} from 'react';
import TableSortBtn from '../../../components/TableSortBtn';

export default function () {
    const [currentType, setCurrentType] = useState('All');

    const handleSetType = (type) => {
        setCurrentType(type);
    }

    return (
        <div className='w-full h-[68px] px-[24px] py-[16px] border-b-[1px] border-[#D1D5DB] flex justify-between max-sm:h-[48px] max-sm:px-[16px] max-sm:py-[8px]'>
            <div className='flex gap-x-2 max-sm:text-[14px]'>
                <TableSortBtn
                    title='All'
                    current={currentType}
                    onClick={handleSetType}
                />
                <TableSortBtn
                    title='On-Market'
                    current={currentType}
                    onClick={handleSetType}
                />
                <TableSortBtn
                    title='Leased'
                    current={currentType}
                    onClick={handleSetType}
                />
                <TableSortBtn
                    title='Draft'
                    current={currentType}
                    onClick={handleSetType}
                />
            </div>
            <div className='flex gap-x-4 max-sm:text-[12px]'>
                <button className=' w-[32px] h-[32px] border-[1px] rounded-[4px] border-stroke'>
                    <i className="fas fa-search"></i>
                </button>
                <button className=' w-[32px] h-[32px] border-[1px] rounded-[4px] border-stroke '>
                    <i className="fas fa-align-justify"></i>
                </button>
            </div>
        </div>
    )
}