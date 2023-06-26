'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, proj, code, index, active, handleHover }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onMouseEnter={() => handleHover(id)}
    onMouseLeave={() => handleHover(null)}
  >
    <img
      src={imgUrl}
      alt="graphic"
      className="absolute w-full h-full object-cover rounded-[24px]"
      onClick={() => { window.open(proj, '_blank'); }}
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-white absolute z-0 lg:bottom-20 py-5 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div
        onClick={() => { window.open(code, '_blank'); }}
        className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"
      >
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/github.svg"
            alt="github"
            className="w-1/2 h-1/2 object-contain hover:shadow-glowDark"

          />
        </div>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
