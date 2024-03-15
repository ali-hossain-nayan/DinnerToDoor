import React, { useState } from "react";
import "./style.css";
import menu from "../../public/data/menu";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import { navbar } from "@/helpers/types";

interface MenuItem {
  id: number;
  name: string;
  category: string;
}

const uniqueList: string[] = [
  ...new Set(menu.map((curElem) => curElem.category)),
  "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState<MenuItem[]>(menu);
  const [menuList] = useState<string[]>(uniqueList);

  const handleFilterItem = (category: string) => {
    if (category === "All") {
      setMenuData(menu);
      return;
    }

    const updatedList = menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={handleFilterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
