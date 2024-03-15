import {  user } from "@/helpers/types";
import React from "react";

interface NavbarProps {
  filterItem: (category: string) => void;
  menuList: string[];
}
const navbar = ({ filterItem, menuList }:NavbarProps) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem:any) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
//This is the Navbar of the restaurant menu project