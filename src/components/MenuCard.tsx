
'use client'
import React, { useState } from "react";
import { menuCard, MenuItem } from "@/helpers/types";

const MenuCard = ({ menuData, curElem }: menuCard) => {
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  const addToCart = (item: MenuItem) => {
    // Add the selected item to the cartItems state
    setCartItems([...cartItems, item]);
    // You can add additional logic here, like showing a confirmation message
    // or updating some other state related to the cart.
  };

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((item: MenuItem) => {
          const { id, name, category, image, description } = item;
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
                  {/* Add to Cart Button */}
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
