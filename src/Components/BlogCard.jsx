import React from "react";

import { FaUserAlt, FaRegCommentDots, FaShareAlt } from "react-icons/fa";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-section">
      <div className="blog-card">
        <div className="blog-image">
          <img src={post.image} alt={post.title} />
          <div className="hover-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="date-badge">
            <div>{post.date}</div>
            <div>{post.month}</div>
          </div>
        </div>
        <div className="tag">{post.category}</div>
        <h4 className="title">{post.title}</h4>
        <div className="icons">
          <span>
            <FaUserAlt /> {post.author}
          </span>
          <span>
            <FaRegCommentDots />
          </span>
          <span>
            <FaShareAlt />
          </span>
        </div>
        <p className="intro">{post.intro}</p>
        <p className="read-more">CONTINUE READING</p>
      </div>
    </div>
  );
};

export default BlogCard;
