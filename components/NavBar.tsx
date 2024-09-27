"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Title from '/public/title.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () : void => {
      setMenuOpen(!menuOpen)
  }

  const links = [
    { id: 1, link: "Tech" },
    { id: 2, link: "Reviews" },
    { id: 3, link: "Culture" },
    { id: 4, link: "AI" },
    { id: 5, link: "Breaking"},
  ];

  const additionalLinks = [
    { id: 1, link: "About" },
    { id: 2, link: "Contact" },
    { id: 3, link: "Subscribe" }
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-customGray fixed nav z-50">
        <div className="flex-grow flex justify-center items-center">
            <h1 className="text-5xl font-signature">
                <Image src={Title} alt="Logo" width="130" height="75" className="cursor-pointer"/>
                {/* <a
                className="link-underline link-underline-black"
                href=""
                target="_blank"
                rel="noreferrer"
                >
                Logo
                </a> */}
            </h1>
            
        </div>

        {/* Menu Icon */}
        {/* <div onClick={handleNav} className="cursor-pointer pl-24">
            {menuOpen ? (
            <AiOutlineClose size={25} />
            ) : (
            <AiOutlineMenu size={25} />
            )}
        </div> */}
        {/* <div onClick={handleNav} className="cursor-pointer pl-24">
            <AiOutlineMenu size={25} >
            </AiOutlineMenu>
        </div>

        

        <div
            className={
            menuOpen
                ? "fixed left-0 top-0 w-[65%] h-screen bg-[#000000] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 w-full h-screen p-10 ease-in duration-500"
            }
         >
        </div> */}


        {/* Hamburger and X icons */}
        <div className="z-20 flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:text-white focus:outline-none
                                focus:ring-2 focus:ring-inset focus:ring-white" onClick={handleNav}> 
                {
                    menuOpen ? 
                     (<svg
                        className="h-6 w-6"
                        xmlns="http://w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      > 
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                     </svg>)
                     : 
                     (<svg
                        className="h-6 w-6"
                        xmlns="http://w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      > 
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                     </svg>)
                }
            </button>


        </div>
          
        {/* Side Menu Panel */}
        <div className={
            menuOpen 
            ? "fixed right-0 top-0 w-[25%] h-screen bg-[rgba(0,0,0,0.5)] p-10 ease-in duration-500 z-10" 
            : "fixed right-[-100%] top-0 w-full h-screen p-10 ease-in duration-500"
        }>
            <ul className="flex flex-col space-y-4 text-white">
                {links.map(({ id, link }) => (
                <li
                    key={id}
                    className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 text-2xl hover:scale-105 hover:text-white duration-200 link-underline" // Changed font size class
                    >
                    <Link href={link}>{link}</Link>
                </li>
                ))}
            </ul>

            <hr className="my-4 border-gray-500" />

            {/* Additional Links in Two Columns */}
            <div className="grid grid-cols-2 gap-4">
              {additionalLinks.map(({ id, link }) => (
                <div key={id} className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 text-m hover:scale-105 hover:text-white duration-200 link-underline">
                  <Link href={link.toLowerCase()}>{link}</Link>
                </div>
              ))}
            </div>

        </div>

      {/* 
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </nav>
  );
};

export default NavBar;