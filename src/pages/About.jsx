import React from "react";
import "./style.css";
import HeroBanner from "../assets/about.png";
import StoreImage from "../assets/nature-about.png";
import TeamSection from "../Components/TeamSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";


const About = () => {
  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <div className="about-hero">
          <img
            src={HeroBanner}
            alt="Nature Thread Banner"
            className="hero-image"
          />
        </div>

        {/* About Our Online Store */}
        <div className="store-intro">
          <div className="intro">
            <div className="store-image">
              <img src={StoreImage} alt="Store Front" />
            </div>
            <div className="store-text">
              <h2>About our online store</h2>
              <p>
                <strong>Nature Thread®</strong> is a women-oriented business. In
                our company, 98% of the employees and workers are women. Our
                focus is to empower Indian women artisans to their fullest
                potential. Our company’s philosophy is based on women-centric
                artistic clothing.
              </p>
              <p>
                We have a physical store in Lucknow Gol Darwaza, Chowk. Lucknowi
                Chikankari – <strong>Nature Thread®</strong> is committed to
                offering supreme quality products with best-in-class stitches by
                experienced <em>karigars</em> (artisans). The stitches used are
                from the 32 different Chikankari stitching techniques.
              </p>
              <p>
                Our every product is designed with the all-original element. We
                make sure to use only skin-friendly thread and cloth for
                complete satisfaction. At Nature Thread®, we deal with
                needlecraft that is GI mapped and acknowledged globally.
              </p>
              <p>
                Nature Thread's versatile apparels will become your new go-to
                clothing for everyday! Soft breathable fabric with elegant
                patterns are inspired by free souls who love to roam freely,
                connect to nature, and breathe fresh air!
              </p>
              <p>
                <strong>Ethnic Hand Embroidery</strong> – clean hand embroidery
                patterns with traditional stitches created with cotton threads.
                Our design includes heavy embroidery that gives an overall
                graceful look.
              </p>
              <p>
                For an active lifestyle, Nature Thread® focuses on performance,
                so you can stay active and comfortable for hours at a time. The
                fabric is natural, comfy, and light-weight. Nature Thread®
                inspired clothes come in different colors and patterns to make
                you feel special in the crowd.
              </p>

              <div className="social-share">
                <hr />
                <h3>Share:</h3>
                <div className="icons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTelegramPlane} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamSection />
    </>
  );
};

export default About;
