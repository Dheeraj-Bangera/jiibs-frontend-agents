import React from "react";
import HomeIcon from "./HomeIcon";
import MenuIcon from "./MenuIcon";
import BuildingIcon from "../Icons/BuildingIcon";
import MenuItem from "./MenuItem";
import UnitsIcon from "../Icons/UnitsIcon";
import UsersIcon from "../Icons/UsersIcon";
import HelpIcon from "../Icons/HelpIcon";
import avatar from "../../assets/avatar.png";
import LogOutIcon from "../Icons/LogOutIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileNavigatoinBar() {
  const [open, setOpen] = useState(false);
  const [showFilterSubMenu, setShowFilterSubMenu] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <>
          <div
            className="fixed bottom-0 left-0 right-0 top-0 bg-[#00000077] z-[1]"
            onClick={() => {
              setOpen(false);
            }}
          ></div>
          <div className="justify-between bottom-0 left-0 right-0 fixed z-[10]">
            <div className="bg-white px-4 py-3 rounded-t-lg ">
              <div className="h-[4px] w-full flex items-center justify-center">
                <div className="h-[4px] bg-gray-400 w-[50px]"></div>
              </div>
              <div
                onClick={() => {
                  handleNavigate("building");
                }}
              >
                <MenuItem text={"Building"} icon={BuildingIcon} />
              </div>
              <div
                onClick={() => {
                  handleNavigate("units");
                }}
              >
                <MenuItem text={"Units"} icon={UnitsIcon} />
              </div>
              <div
                onClick={() => {
                  handleNavigate("analytics");
                }}
              >
                <MenuItem text={"Analytics"} icon={UsersIcon} />
              </div>
              <div
                onClick={() => {
                  handleNavigate("help");
                }}
              >
                <MenuItem text={"Help Center"} icon={HelpIcon} />
              </div>
              <hr className="absolute left-0 right-0" />
              <div className="relative flex items-center px-1 mt-3">
                <div className="flex items-center">
                  <img src={avatar} width={30} height={30} />
                  <div className="ml-4">
                    <div className="font-semibold text-[16px]">
                      Anagram Nomad
                    </div>
                    <div className="text-[12px]">Logout</div>
                  </div>
                </div>
                <div className="absolute right-0">
                  <LogOutIcon />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="fixed left-0 right-0 bottom-0 h-[65px] flex justify-between px-10 bg-white border-t w-full items-center z-[9]">
        <div className="cursor-pointer" onClick={() => handleNavigate("home")}>
          <HomeIcon />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleNavigate("building")}
        >
          <BuildingIcon />
        </div>
        <div className="cursor-pointer" onClick={() => handleNavigate("units")}>
          <UnitsIcon />
        </div>
        <div onClick={() => setOpen(true)}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
}
