// components/BlogSection.js
import React from 'react';

const BlogSection = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default BlogSection;
