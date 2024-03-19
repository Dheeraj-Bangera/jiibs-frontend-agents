import React from "react";
import Button from "../../../components/Button/Button";
import left_arrow from "../../../assets/left_arrow.png";
import right_arrow from "../../../assets/right_arrow.png";
import axios from "axios";
import { BASE_API_URL } from "../../../constants";

export default function ActionBarUnit({ title, formData }) {
  const postData = async () => {
    const newFormData = new FormData();

    for (let key in formData) {
      newFormData.append(key, formData[key]);
    }

    const res = await axios.post(
      `${BASE_API_URL}/unit/addUnit`,
      newFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert(res.data.message);
  };
  return (
    <div className="flex items-center w-full justify-between max-sm:justify-end max-sm:pr-[15px]">
      <div className="text-[16px] sm:text-[26px] font-semibold max-sm:hidden sm:leading-[80%]">
        {title}
      </div>
      <div className="flex gap-x-4">
        <Button style="secondary" onClick={postData}>
          Publish
        </Button>
        <Button onClick={() => console.log(formData)} style="secondary">
          View
        </Button>
        <div className="">
          <button
            className={`bg-button-secondary text-primar px-3 rounded-tl rounded-bl text-[14px] h-[32.6px]`}
          >
            <img
              src={left_arrow}
              width={12.16}
              height={12.16}
              className="opacity-30"
            />
          </button>
          <button
            className={`bg-button-secondary text-primar px-3 rounded-tr rounded-br text-[14px] h-[32.6px] hover:bg-gray-300`}
          >
            <img src={right_arrow} width={12.16} height={12.16} />
          </button>
        </div>
      </div>
    </div>
  );
}
