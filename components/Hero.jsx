import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className=" object-cover w-full h-full z-0 overflow-x-hidden"
      >
        <source src="/Jeevan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
