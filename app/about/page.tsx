import React from 'react';
import Image from 'next/image'; // Ensure to import Image from next/image
import Logo from '/public/logo.svg';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customGray">
      <div className="w-1/2 h-1/2 mb-0"> {/* Set a fixed height for the container */}
        <Image 
          src={Logo} 
          alt="Logo" 
          layout="fill" // Makes the image responsive within the container
          objectFit="contain" // Ensures the image maintains its aspect ratio
          className="cursor-pointer" 
        />  
      </div>
      <p className="w-full text-customWhite text-center whitespace-nowrap max-w-full overflow-hidden z-20" style={{ fontSize: '3vw' }}>
        we're bringing tech news as it relates to you.
      </p>      
    </div>
  );
};

export default AboutUs;
