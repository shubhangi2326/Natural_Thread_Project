import React from "react";
import "./TeamSection.css";
import member1 from "../../assets/team-member-1.jpg";
import member2 from "../../assets/team-member-2.png";
import member3 from "../../assets/team-member-2.jpg";
import member4 from "../../assets/team-member-3.jpg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teamData = [
  {
    name: "Aviana Plummer",
    title: "CEO / FOUNDER",
    img: member1,
  },
  {
    name: "Purvi Sharma",
    title: "Lead Developer",
    img: member2,
  },
  {
    name: "Braydon Wilkerson",
    title: "Head of Design",
    img: member3,
  },
  {
    name: "Kristin Watson",
    title: "Marketing Director",
    img: member4,
  },
];

function TeamSection() {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <div className="team-socials">
              <a href="#" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon linkedin">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
