import React, { useState, useContext } from "react";
import Logo from "../Logo/Logo";
import NavBarIcon from "../Icons/NavBarIcon";
import NavMenu from "./NavMenu";
import LogOutIcon from "../../components/Icons/LogOutIcon";
import { AuthContext } from "../../context/AuthContext";

import avatar from "../../assets/avatar.png";
import MobileNavigatoinBar from "../MobileNavigationBar/MobileNavigatoinBar";

export default function NavBar() {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
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
          {isLoggedIn && (
            <>
              <div className="flex items-center">
                <img src={avatar} width={50} height={50} />
                <div className="ml-4">
                  <div className="font-semibold text-[16px]">{user?.name}</div>
                  <button
                    onClick={logout}
                    className="text-[14px] cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <button
                className="absolute right-0 cursor-pointer h-full flex items-center justify-center w-[50px]"
                onClick={logout}
              >
                <LogOutIcon />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="block sm:hidden">
        <MobileNavigatoinBar />
      </div>
    </>
  );
}
