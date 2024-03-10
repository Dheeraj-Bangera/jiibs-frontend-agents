import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import HomeIcon from "../Icons/HomeIcon";
import BuildingIcon from "../Icons/BuildingIcon";
import UnitsIcon from "../Icons/UnitsIcon";
import InboxIcon from "../Icons/InboxIcon";
import UsersIcon from "../Icons/UsersIcon";
import LeadsIcon from "../Icons/LeadsIcon";
import HelpIcon from "../Icons/HelpIcon";
import SubMenuItem from "./SubMenuItem";

const menuData = [
  { text: "Home", url: "home", icon: HomeIcon, submenu: [] },
  {
    text: "Building",
    url: "building",
    icon: BuildingIcon,
    submenu: [],
  },
  {
    text: "Units",
    url: "units",
    icon: UnitsIcon,
    submenu: [],
  },
  { text: "Inbox", url: "inbox", icon: InboxIcon, submenu: [] },
  { text: "Analytics", url: "analytics", icon: UsersIcon, submenu: [] },
  { text: "Leads", url: "leads", icon: LeadsIcon, submenu: [] },
  { text: "Help Center", url: "help", icon: HelpIcon, submenu: [] },
];

export default function NavMenu() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  useEffect(() => {
    setCurrent(window.location.pathname.slice(1));
  }, []);
  const handleMenuSelect = (page) => {
    setCurrent(page);
    navigate(page);
  };
  return (
    <div className="mt-6">
      {menuData.map((menu) => {
        return (
          <NavBarItem
            icon={menu.icon}
            text={menu.text}
            submenu={menu.submenu}
            key={menu.url}
            url={menu.url}
            onClick={() => handleMenuSelect(menu.url)}
            current={current}
          >
            <div>
              {menu.submenu &&
                menu.submenu.map((submenu_item) => {
                  return (
                    <SubMenuItem
                      text={submenu_item.text}
                      key={submenu_item.url}
                      url={submenu_item.url}
                      onClick={() => {
                        handleMenuSelect(submenu_item.url);
                      }}
                      current={current}
                    />
                  );
                })}
            </div>
          </NavBarItem>
        );
      })}
    </div>
  );
}
