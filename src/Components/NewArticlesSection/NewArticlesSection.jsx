import React from "react";
import "./NewArticlesSection.css";
import { articles } from "../../articles";
import { FaUserAlt, FaRegCommentDots, FaShareAlt } from "react-icons/fa";

const NewArticlesSection = () => {
  return (
    <div className="article-section">
      <div className="article-heading">
        <h1>Our New Article</h1>
        <p>
          Commercial publishing platforms and content management systems that
          you can show different text, different the web workers toolbox.
        </p>
      </div>

      <div className="article-cart-section">
        {articles.map((item, index) => (
          <div className="article-card" key={index}>
            <div className="article-image">
              <img src={item.image} alt="article" />

              <div className="hover-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="date-badge">
                <div>{item.date}</div>
                <div>{item.month}</div>
              </div>
            </div>

            <div className="tag">{item.category}</div>
            <h4 className="title">{item.title}</h4>
            <div className="icons">
              <span>
                <FaUserAlt /> {item.author}
              </span>
              <span>
                <FaRegCommentDots />
              </span>
              <span>
                <FaShareAlt />
              </span>
            </div>
            <p className="intro">{item.intro}</p>
            <p className="read-more">CONTINUE READING</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArticlesSection;
