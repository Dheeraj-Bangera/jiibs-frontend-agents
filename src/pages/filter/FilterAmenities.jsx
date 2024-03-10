import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AmenityRow from "./components/AmenityRow";
import Header from "./components/Header";

import TableSortBtn from '../../components/TableSortBtn';

export default function FilterAmenities({type}) {
  const navigate = useNavigate();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const handleOnAdd = () => {
    if(type === 'Amenities')
      navigate("/building_amenities");
    else if(type === 'Neighborhoods')
      navigate("/building_neighborhood");
    else if(type === 'Life Style')
      navigate('/building_lifestyle');

  };

  const handleAllCheck = (e) => {
    setCheck1(e.target.checked);
    setCheck2(e.target.checked);
    setCheck3(e.target.checked);
    setCheck4(e.target.checked);
  }

  return (
    <div className="flex flex-col gap-y-[19px] pt-12 pl-[21px] pr-[30px] w-full max-sm:pt-[16px] max-sm:px-0 max-sm:gap-y-[15px]">
      {/* <header className="flex justify-between items-center py-[8px] max-sm:px-[16px]">
        <div className='text-[26px] text-primary font-semibold max-sm:text-[26px] sm:leading-[80%]'>
          {type}
        </div>
        <div
          className='bg-primary text-white text-[16px] px-[24px] py-[8px] rounded-[4px] max-sm:px-[13px] max-sm:py-[6px] max-sm:text-[12px]'
          onClick={handleOnAdd}
        >
          Create
        </div>
      </header> */}
      <Header
        type={type}
        handleOnAdd={handleOnAdd}
      />
      <div className="bg-white rounded-t-[8px] border-[1px] border-stroke max-sm:border-0">
        <div className="flex justify-between items-center py-[16px] px-[24px] rounded-t-[8px] max-sm:py-2 max-sm:px-4 h-[68px] max-sm:h-[48px]  max-sm:text-[15px]">
          <div className="px-2 py-1 w-[33px] h-[28px] bg-[#222222] text-[#fff] rounded-[4px] flex justify-center items-center">
            All
          </div>
          <div className='flex gap-x-4 w-22 h-9'>
            <div className='flex items-center justify-center w-9 h-9 rounded-[4px] border-[1px] border-stroke p-2 text-[20px] max-sm:w-8 max-sm:h-8 max-sm:text-[12px]'>
              <i className="fas fa-search"></i>
            </div>
            <div className='flex items-center justify-center w-9 h-9 rounded-[4px] border-[1px] border-stroke p-2 text-[20px] max-sm:w-8 max-sm:h-8 max-sm:text-[12px]'>
              <i className="fas fa-align-justify"></i>
            </div>
          </div>
        </div>

        <div className='flex w-full h-[48px] justify-between items-center bg-[#F7F7F7] text-[14px] text-black border-t-[1px] border-stroke max-sm:hidden'>
            <div className='flex'>
                <div className='flex justify-center items-center w-[64px]'>
                    <input type='checkbox' onChange={handleAllCheck} className='w-[25px] h-[25px]' />
                </div>
                <div className='flex justify-start items-center w-[88px] pl-2'>
                </div>
                <div className='flex items-center'>
                    Title
                </div>
            </div>
            
            <div className='flex gap-x-[30px]'>
                <div className='w-[120px] flex justify-center items-center'>
                    Building
                </div>
                <div className='w-[120px] flex justify-center items-center'>
                    Units
                </div>
            </div>
        </div>
        <AmenityRow 
          checked = {check1}
          onChange = {(e) => setCheck1(e.target.checked)}
        />
        <AmenityRow 
          checked = {check2}
          onChange = {(e) => setCheck2(e.target.checked)}
        />
        <AmenityRow 
          checked = {check3}
          onChange = {(e) => setCheck3(e.target.checked)}
        />
        <AmenityRow 
          checked = {check4}
          onChange = {(e) => setCheck4(e.target.checked)}
        />
      </div>
    </div>
  );
}
