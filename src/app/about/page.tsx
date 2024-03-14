// pages/about.js
'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import aboutImage from '../../../public/images/about-bg.jpg';

export default function About() {
  return (
    <>
      <Header />
      <div className="relative h-screen">
        <Image
          src={aboutImage}
          alt="About background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 py-8 absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-semibold mb-6 text-neutral-400">About Dinner to Door</h1>
          <p className="text-3xl text-inherit">
            Dinner to Door is a culinary platform dedicated to delivering a diverse range of delicious meals right to your doorstep. We strive to provide an exceptional dining experience with our carefully curated menus, using fresh and locally-sourced ingredients to bring flavors from around the world to your table.
          </p>
          <p className="text-3xl mt-4 text-inherit">
            Our mission is to offer convenience without compromising on quality. Each dish is crafted with passion and attention to detail, ensuring that every bite reflects our commitment to excellence. At Dinner to Door, we aim to transform the way you enjoy your meals by offering a seamless and delightful culinary journey.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}