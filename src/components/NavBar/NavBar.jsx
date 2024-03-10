import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavBarIcon from "../Icons/NavBarIcon";
import NavMenu from "./NavMenu";
import LogOutIcon from "../../components/Icons/LogOutIcon";

import avatar from "../../assets/avatar.png";
import MobileNavigatoinBar from "../MobileNavigationBar/MobileNavigatoinBar";

export default function NavBar() {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <div className="fixed top-0 bottom-0 h-[100vh] bg-white w-72 min-w-[18rem] max-w-[18rem] pt-12 px-4 hidden sm:block z-[1]">
        <div className="flex justify-between items-start">
          <Logo />
          <div onClick={handleCollapse}>
            <NavBarIcon />
          </div>
        </div>
        <div>
          <NavMenu />
        </div>
        <div className="absolute bottom-5 flex items-center left-5 right-5">
          <div className="flex items-center">
            <img src={avatar} width={50} height={50} />
            <div className="ml-4">
              <div className="font-semibold text-[16px]">Anagram Nomad</div>
              <div className="text-[12px]">Logout</div>
            </div>
          </div>
          <div className="absolute right-0">
            <LogOutIcon />
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <MobileNavigatoinBar />
      </div>
    </>
  );
}
