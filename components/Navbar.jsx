'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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
      id="nav"
    >
      <div className="absolute w-[70%] inset-0 gradient-02" />
      <div className={`${styles.innerWidth} hidden sm:flex mx-auto justify-between gap-0.5`}>
        <a href="#hero" className="z-10">
          <img
            src="/logoweb.png"
            alt="Search"
            className="w-[60px] h-[60px] object-contain"
          />
        </a>
        <a href="#about" className="black_btn z-10">
          About
        </a>
        <a href="#explore" className="black_btn z-10">
          Portfolio
        </a>
        <div className="flex justify-between gap-3">
          <a href="https://www.linkedin.com/in/bhavikpatel28/" className="imghome" target="_blank" rel="noreferrer">
            <img
              src="/linkedin.png"
              alt="Linkedin"
              className="w-[30px] h-[30px] object-contain z-10 hover:shadow-glowDark"
            />
          </a>
          <a href="https://github.com/bhavikp28" className="imghome" target="_blank" rel="noreferrer">
            <img
              src="/github.svg"
              alt="github"
              className="w-[30px] h-[30px] object-contain z-10 hover:shadow-glowDark"
            />
          </a>
          <a href="mailto:patelbhavik063@gmail.com" className="red_btn z-10">
            Let's Work
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
              href="#about"
              className="toggle_btn"
              onClick={() => setToggleDropdown(false)}
            >
              About
            </a>
            <a
              href="#explore"
              className="toggle_btn"
              onClick={() => setToggleDropdown(false)}
            >
              Portfolio
            </a>
          </div>
        )}
        <div className="flex justify-between gap-5">
          <a href="mailto:patelbhavik063@gmail.com" className="red_btn z-10 ">
            Let's Work
          </a>
          <a href="https://www.linkedin.com/in/bhavikpatel28/" className="imghome" target="_blank" rel="noreferrer">
            <img
              src="/linkedin.png"
              alt="Linkedin"
              className="w-[25px] h-[25px] object-contain z-10 hover:shadow-glowDark"
            />
          </a>
          <a href="https://github.com/bhavikp28" className="imghome" target="_blank" rel="noreferrer">
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
