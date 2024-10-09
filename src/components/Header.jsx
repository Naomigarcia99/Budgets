import React from "react";
import headerImage from "../assets/header.png";

export function Header() {
  return (
    <div className="relative flex items-center justify-center">
      <h1 className="absolute font-bold">Aconsegueix la millor qualitat</h1>
      <img src={headerImage} alt="Header_image" />
    </div>
  );
}
