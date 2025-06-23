import React from 'react'
import blogData from '../blogData';

import BlogCard from '../Components/BlogCard';

const Blog = () => {
  return (
    <div className="blog-list">
      {blogData.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog