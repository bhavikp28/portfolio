'use client';

import { motion } from 'framer-motion';
import Iframe from 'react-iframe';
import styles from '../styles';

import { TitleText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} id="getstarted">
    <TitleText title="| Resume |" className="justify-bottom" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <div className="mt-[31px] flex flex-col max-w-[1000px] h-[1000px]">
          <Iframe
            src="/resume.pdf"
            height="sm:h-[765px] h-[640px]"
            overflow="hidden"
            className="sm:h-[765px] h-[640px]"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
