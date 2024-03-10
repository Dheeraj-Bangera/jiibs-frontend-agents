import React from "react";
import { useState } from "react";
import Input from "../../../../components/Input/Input";

export default function SECard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('https://www.jiibs.com/');

  const handleUrl = (e) => {
    if(!e.target.value.startsWith('https://www.jiibs.com/'))
      setUrl('https://www.jiibs.com/');
    else
      setUrl(e.target.value);
  }

  const handleTitle = (e) => {
    if(e.target.value.length <= 70)
      setTitle(e.target.value);
  }

  return (
    <div className="bg-white py-4 px-5 rounded-none sm:rounded-lg shadow-none sm:shadow-sm mt-6 mb-6 break-words">
      <div>Search engine listing</div>
      <div className="text-[16px] mt-4 font-semibold">{title}</div>
      <div className="text-[14px] mt-1 text-green-700">
        {url}
      </div>
      <div className="text-[16px] mt-1">{description}</div>
      {/* start of editing */}
      <div>
        <div className="text-[16px] mt-6">Meta Title</div>
        <Input 
          backgroundColor={"#F7F7F7"} 
          value={title}
          onChange={handleTitle}
        />
        <div className="text-[12px] mt-1 text-secondary">
          {title.length} of 70 characters used
        </div>
      </div>
      {/* start of description */}
      <div>
        <div className="text-[16px] mt-4">Meta Description</div>
        <textarea
          rows={8}
          multiple="true"
          className="text-[14px] px-3 py-1 mt-2 border border-primary focus:border-gray-400 w-full text-dark rounded-lg outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {/* start of url handle */}
      <div>
        <div className="text-[16px] mt-1">URL Handle</div>
        <Input 
          backgroundColor={"#F7F7F7"} 
          value={url}
          onChange={handleUrl}
        />
      </div>
    </div>
  );
}
