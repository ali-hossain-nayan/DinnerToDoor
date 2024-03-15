import { Blog } from '@/helpers/types';
import React from 'react';
// import { Blog } from './types'; 

const BlogSection: React.FC<Blog> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default BlogSection;
