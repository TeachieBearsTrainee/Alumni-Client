import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Footer from "./Footer";
import Example from "./Example";

export const Home = () => {
  return (
    <>
      {/* <Static/> */}

      {/* First Page */}
      <div className="relative w-full min-h-screen">
        {/* Background Images */}
        <div className="absolute inset-0 flex opacity-100">
          <img
            src="/images/image1.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
          <img
            src="/images/image2.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
          <img
            src="/images/image3.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
          <img
            src="/images/image4.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
          <img
            src="/images/image5.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/40"></div>

        {/* Heading Animation */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white font-medium">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-4"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl">Welcome To our</h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl">COLLEGE</h1>
          </motion.div>
        </div>
      </div>

      {/* Second Page */}
      <div
      className="relative w-full min-h-screen px-5 md:px-[50px] lg:px-[90px] py-5 md:py-[30px] flex bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/background2.jpg')" }}
    >
      <div className="relative inset-0 w-full flex z-10">
        {/* Responsive Layout: flex-col on mobile/tablets, flex-row on laptops */}
        <div className="relative inset-0 flex flex-col md:flex-row gap-6 md:gap-[25px] border-2 m-5 md:m-20 justify-between w-full">
          
          {/* Left Section (Text & Button) */}
          <div className="w-full md:w-2/5 flex flex-col justify-between border-2 rounded-lg p-6 md:p-8 md:border-none text-center text-white">
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-normal">Events</h1>
              <p className="mt-4 md:mt-6 leading-normal max-w-sm font-light mx-auto text-sm md:text-lg lg:text-3xl">
                Simply random text. It has roots in a piece of classical Latin literature from 45 BC.
              </p>
            </div>
            <div className="mt-4 md:mt-6">
              <button className="px-4 md:px-6 w-[70%] py-2 md:py-3 rounded-lg border border-[rgba(255,255,255,0.2)]">
                Explore More
              </button>
            </div>
          </div>

          {/* Right Section (Cards) */}
          <div className="relative flex flex-col gap-6 w-full md:w-4/5 border-2 rounded-lg p-6 md:p-8 md:border-none">
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
              <Card title="Open-mics" description="Shine a spotlight on all the raw talent in your student body with an open mic night! It's the perfect platform to invite students to share their ..." />
              <Card title="Debates" description="Encourage students to voice their opinions on various topics in an engaging and intellectual way through debates and discussions." />
              <Card title="Workshops" description="Host educational workshops covering a variety of interesting and engaging topics for students to learn new skills." />
            </div>
          </div>
        </div>
      </div>
    </div>

      <Example/>

      <Footer/>
    </>
  );
};

export default Home;
