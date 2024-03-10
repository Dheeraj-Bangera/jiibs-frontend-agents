import React, {useState} from "react";

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
    <div className="w-full sm:w-[calc(100%-288px)]">
      <div className="w-full px-[24px] py-12 space-y-[24px] max-sm:px-0 max-sm:py-4">
        <Header />
        <div className="w-full rounded-[8px] border-[1px] border-[#D1D5DB] max-sm:border-none bg-white overflow-x-auto">
          <div className="w-full sm:w-fit tw:w-full">
            <FilterBar />
            <TableHeader
              onChange = {handleAllCheck}
            />
            <TableRow
              buildingname="Anagram Nomad"
              neighborhood="Nomad"
              units="199"
              yearbuilt="2018"
              checked = {check1}
              onChange = {(e) => setCheck1(e.target.checked)}
            />
            <TableRow
              buildingname="Anagram Nomad"
              neighborhood="Nomad"
              units="199"
              yearbuilt="2018"
              checked = {check2}
              onChange = {(e) => setCheck2(e.target.checked)}
            />
            <TableRow
              buildingname="Anagram Nomad"
              neighborhood="Nomad"
              units="199"
              yearbuilt="2018"
              checked = {check3}
              onChange = {(e) => setCheck3(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
