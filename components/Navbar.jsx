'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[70%] inset-0 gradient-02" />
      <div className={`${styles.innerWidth} hidden sm:flex mx-auto justify-between gap-1`}>
        <img
          src="/logoweb.png"
          alt="Search"
          className="w-[50px] h-[50px] object-contain"
        />
        <a href="https:google.com" className="black_btn z-10">
          About
        </a>
        <a href="https:google.com" className="black_btn z-10">
          Portfolio
        </a>
        <a href="https:google.com" className="black_btn z-10">
          Resume
        </a>
        <div className="flex justify-between gap-3">
          <a href="https:google.com" className="imghome">
            <img
              src="/linkedin.png"
              alt="Linkedin"
              className="w-[30px] h-[30px] object-contain z-10 hover:shadow-glowDark"
            />
          </a>
          <a href="https:google.com" className="imghome">
            <img
              src="/github.svg"
              alt="github"
              className="w-[30px] h-[30px] object-contain z-10 hover:shadow-glowDark"
            />
          </a>
          <a href="https:google.com" className="red_btn z-10">
            Lets Work
          </a>
        </div>
      </div>
      <div className={`${styles.innerWidth} sm:hidden flex mx-auto justify-between `}>
        <img
          src="/dropmenu.png"
          alt="drop"
          className="w-[30px] h-[30px] z-20"
          onClick={() => setToggleDropdown(((prev) => !prev))}
        />
        {toggleDropdown && (
          <div className="dropdown z-20">
            <a
              href="https:google.com"
              className="toggle_btn"
              onClick={() => setToggleDropdown(false)}
            >
              About
            </a>
            <a
              href="https:google.com"
              className="toggle_btn"
              onClick={() => setToggleDropdown(false)}
            >
              Portfolio
            </a>
            <a
              href="https:google.com"
              className="toggle_btn "
              onClick={() => setToggleDropdown(false)}
            >
              Resume
            </a>
          </div>
        )}
        <div className="flex justify-between gap-5">
          <a href="https:google.com" className="red_btn z-10 ">
            Lets Work
          </a>
          <a href="https:google.com" className="imghome">
            <img
              src="/linkedin.png"
              alt="Linkedin"
              className="w-[25px] h-[25px] object-contain z-10 hover:shadow-glowDark"
            />
          </a>
          <a href="https:google.com" className="imghome">
            <img
              src="/github.svg"
              alt="github"
              className="w-[25px] h-[25px] object-contain z-10 hover:shadow-glowDark"
            />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
