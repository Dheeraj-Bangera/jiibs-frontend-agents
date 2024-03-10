import React from "react";
import LifeStyleSelect from "../../../components/LifeStyleSelect/LifeStyleSelect";

const options = [
  {
    value: 1,
    label: "Leanne Graham",
  },
  {
    value: 2,
    label: "Ervin Howell",
  },
];

export default function LifestyleCard() {
  return (
    <div className="bg-white py-4 px-5 rounded-lg shadow-sm">
      <div className="text-[16px] mt-2">Lifestyle</div>
      <div>
        <div className="mt-2">
          {/* <DropDownSelect
            options={options}
            // onChange={(values) => this.setValues(values)}
          /> */}
          <LifeStyleSelect 
            options={['bodysuits', 'all', 'essentials', 'soomewhere', 'top', '1602']}
          />
        </div>
      </div>
    </div>
  );
}
