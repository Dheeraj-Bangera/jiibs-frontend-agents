import React, { useState } from "react";

export default function NavBarItem({
  url,
  icon: Icon,
  text,
  current,
  onClick,
  submenu,
  children,
}) {
  let active = url === current;
  if (!active) {
    submenu.forEach((submenu_item) => {
      if (submenu_item.url === current) active = true;
    });
  }
  return (
    <>
      <div
        className={`py-2 flex px-4 my-2 items-center hover:bg-secondary rounded-lg cursor-pointer text-[15px] ${
          active && "bg-secondary"
        }`}
        onClick={onClick}
      >
        <Icon color={active ? "#222222" : "#999B9F"} />
        <div
          className={`ml-2 font-semibold color-gray ${
            active ? "text-primary" : "text-secondary"
          }`}
        >
          {text}
        </div>
      </div>
      {active && children}
    </>
  );
}
