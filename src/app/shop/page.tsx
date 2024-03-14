"use client";
import React from "react";
import menu from "../../../public/data/menu";
import Image from "next/image";
import Resturant from "@/components/Restaurant";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import image '../../../public/images'

const Shop = () => {
  return (
    <>
      <Header pathname={window.location.pathname} />
      <div className="container mx-auto px-4 py-8 bg-ora-400">
        <h1 className="text-3xl font-semibold mb-6"></h1>
        <p className="text-lg">
        </p>
        <p className="text-lg mt-4">
      <Resturant />
        </p>
        {/* Add more content about your company */}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
