import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer bg-rose-200">
      <div className="footer-details flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0">
        <div className="text-left flex justify-start gap-8">
          <h2 className="logo text-2xl font-bold lowercase italic">
          Food<span className="text-rose-500">verse</span>
          </h2>
          <p className="text-1xl">
            <b>Foodverse by Nature</b>
            <br />
            "9609 Sideroad 17"
            <br />
            "Erin, Ontario" 
            <br />
            "N0B 1T0, Canada"
          </p>
        </div>
        <div className="text-right"></div>
      </div>
      <div className="social-nav"></div>
      <div className="site-footer-bar"></div>
    </footer>
  );
};

export default Footer;