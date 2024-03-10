import React, { useState } from "react";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

export default function () {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const handleAllCheck = (e) => {
    setCheck1(e.target.checked);
    setCheck2(e.target.checked);
    setCheck3(e.target.checked);
    setCheck4(e.target.checked);
  }

  return (
    <div className='w-full overflow-x-auto'>
      <div className="w-full max-tw:w-[1250px] max-sm:w-full px-[24px] py-12 max-sm:py-4 space-y-[24px] max-sm:px-0">
        <Header />
        <div className="w-full rounded-[8px] border-[1px] border-[#D1D5DB] max-sm:border-none bg-white">
          <FilterBar />
          <TableHeader
            onChange={handleAllCheck}
          />
          <TableRow
            title="121 Founders"
            units="#1302"
            status="On-Market"
            occupancy="Immediate"
            beds="1"
            baths="1"
            price="$3500"
            checked = {check1}
            onChange = {(e) => setCheck1(e.target.checked)}
          />
          <TableRow
            title="121 Founders"
            units="#1509"
            status="On-Market"
            occupancy="Immediate"
            beds="1"
            baths="1"
            price="$3500"
            checked = {check2}
            onChange = {(e) => setCheck2(e.target.checked)}
          />
          <TableRow
            title="121 Founders"
            units="#1509"
            status="Leased"
            occupancy="07/20/2025"
            beds="1"
            baths="1"
            price="$3500"
            checked = {check3}
            onChange = {(e) => setCheck3(e.target.checked)}
          />
          <TableRow
            title="121 Founders"
            units="#1509"
            status="Leased"
            occupancy="07/20/2025"
            beds="1"
            baths="1"
            price="$3500"
            checked = {check4}
            onChange = {(e) => setCheck4(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}
