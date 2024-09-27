import React from 'react';
import Image from 'next/image'; // Ensure to import Image from next/image
import Logo from '/public/logo.svg';
import TinaHeadshot from '/public/headshotTina.jpg'
import IsaacHeadshot from '/public/headshotIsaac.png'

const AboutUs = () => {
  return (
    <div className="bg-customGray">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-1/2 h-1/2 mb-0"> {/* Set a fixed height for the container */}
          <Image 
            src={Logo} 
            alt="Logo" 
            layout="fill" // Makes the image responsive within the container
            objectFit="contain" // Ensures the image maintains its aspect ratio
            className="cursor-pointer" 
          />  
        </div>  
        <p className="w-full text-customWhite text-center whitespace-nowrap max-w-full overflow-hidden z-20 animate-fadeIn" style={{ fontSize: '3vw' }}>
        {"we're bringing tech news as it relates to you."}
      </p>  
      </div>

      {/* Biographies */}
  

      <div className="flex flex-wrap justify-center w-full mt-4 md:flex-nowrap pb-16"> {/* Stacks in mobile, aligns horizontally on larger screens */}
        <div className="w-32 h-32 mb-4 relative"> {/* Set the size of the circle */}
          <Image 
            src={IsaacHeadshot} // Replace with your picture's path
            alt="Profile Picture" 
            layout="fill" // Makes the image responsive within the container
            objectFit="cover" // Ensures the image covers the entire area while maintaining aspect ratio
            className="rounded-full cursor-pointer" // Apply rounded-full to make it circular
          />  
        </div>

        <p className="w-1/4 p-4 text-customWhite text-justify"> {/* Full width on mobile, 1/4 width on desktop */}
          Isaac Tay is a Singapore-Born, New York-Based Journalist and Actor, recently graduating from New York 
          University. He is currently interested in the evolution of technology and its future, the intersection 
          of live-streaming and performance, and our relationship to childhood nostalgia.
        </p>

        <div className="w-full md:w-32 h-32 mb-4 relative ml-16"> {/* Set the size of the circle */}
          <Image 
            src={TinaHeadshot} // Replace with your picture's path
            alt="Profile Picture" 
            layout="responsive" // Makes the image responsive within the container
            objectFit="cover" // Ensures the image covers the entire area while maintaining aspect ratio
            className="rounded-full cursor-pointer" // Apply rounded-full to make it circular
          />  
        </div>

        <p className="w-1/4 p-4 text-customWhite text-justify"> {/* Full width on mobile, 1/4 width on desktop */}
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>

    </div>
  );
};

export default AboutUs;
