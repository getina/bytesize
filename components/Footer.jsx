import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-customGray">
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          <p className="text-xs text-customWhite">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
