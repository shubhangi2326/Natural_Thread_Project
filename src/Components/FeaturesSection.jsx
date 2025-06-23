import React from 'react';
import shoping from '../assets/free_shoping.svg'
import support_team from '../assets/support_team.svg'
import payment from '../assets/payment.svg'
import right from '../assets/safe_or_secure.svg'

const FeaturesSection = () => {
  const features = [
    {
      icon: shoping,
      title: 'Free Shipping',
      description: '“Experience complimentary shipping on every order with a minimum purchase of just 300. Start shopping now to seize the savings!”'
    },
    {
      icon: support_team,
      title: 'Support Team',
      description: '“Our dedicated support team is here for you. Reach out anytime for prompt assistance and personalized solutions.”'
    },
    {
      icon: payment,
      title: 'Online Payments',
      description: '“Seamless online payment for your convenience and peace of mind. Trust in our secure payment gateway for hassle-free transactions.”'
    },
    {
      icon: right,
      title: 'Safe & Secure',
      description: '“Rest assured, your safety and security are our top priorities. With state-of-the-art encryption.”'
    }
  ];

  return (
    <section className="features-section">
      {features.map((feature, index) => (
        <div className="feature-box" key={index}>
          <img src={feature.icon} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
