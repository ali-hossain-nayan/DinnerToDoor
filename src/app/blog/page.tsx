
'use client'
// pages/blog.js
// pages/blog.js
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import CommentSection from '../comment/page';
import Image from 'next/image';
import blogImage from '../../../public/images/blog.png';

const Blog = () => {
  return (
    <div className="min-h-screen relative bg-gray-300">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Welcome to my blog" />
      </Head>

      <Header pathname={''} />
      
      {/* Background image */}
      <div className="absolute inset-0 z-0 -mt-8">
        <Image
          src={blogImage}
          alt='blog'
          // layout="fill"
          // objectFit="cover"
          // quality={100}
          hight={300}
          width={3000}
        />
      </div>

      {/* Content container */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">My Blog</h1>
          <p className="text-gray-800 text-white">Welcome to my blog</p>
        </div>

        <BlogSection title="Culinary Chronicles: Exploring the World of Food" content="Join us on a culinary journey as we explore the diverse and vibrant world of food. From tantalizing recipes to insightful articles, our blog is your go-to destination for all things food-related. Discover new flavors, learn cooking tips and techniques, and immerse yourself in the rich tapestry of global cuisine. Whether you're a seasoned chef or a passionate food enthusiast, there's something for everyone in our Culinary Chronicles." />
        <CommentSection postId={1} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
