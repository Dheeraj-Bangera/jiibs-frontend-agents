import React from "react";
import Image_Navbar from "../../assets/navbar.png";

export default function NavBarIcon({ color }) {
  return (
    <img
      className="opacity-40 hover:opacity-80 cursor-pointer"
      src={Image_Navbar}
      width={24}
    />
  );
}
