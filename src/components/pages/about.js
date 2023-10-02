import React from "react";
import Image from "../../assets/farmermarket.png";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-white-800">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-bl-ful"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-whi-700 mb-8">
          We have developed a state-of-the-art system that bridges the gap between farmers and markets. Our platform is designed to simplify the complex process of getting agricultural products to market, making it easier, faster, and more profitable for farmers.
            <br/>
            <br/>
            We believe that farmers are the backbone of society, and we are committed to empowering them with the tools and resources they need to succeed, hence are dedicated to staying at the forefront of technology and agriculture, constantly seeking new and better ways to support farmers and improve the food supply chain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
































