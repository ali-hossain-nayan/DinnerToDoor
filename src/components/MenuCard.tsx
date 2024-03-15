
'use client'
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MenuItem } from "@/helpers/types";

interface MenuCardProps {
  menuData: MenuItem[];
}

const MenuCard: React.FC<MenuCardProps> = ({ menuData }) => {
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCartItems([...cartItems, item]);
    toast.success(`${item.name} added to cart`, {
      position: "top-right",
    });
  };

  return (
    <>
      <section className="main-card--cointainer">
      <Toaster/>

        {menuData.map((item: MenuItem) => {
          const { id, name, image, description } = item;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{name}</span>
                  <h2 className="card-title"> {name}</h2>
                  <span className="card-description subtle">
                    {description}
                  </span>
                  <div className="card-read">Read</div>
                  <button
                    className="card-tag subtle"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
                <img src={image} alt="images" className="card-media" />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
