'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.30 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me |" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.15, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Bhavik</span> is
        currently based in New Jersey and is always keen to learn new technologies,
        frameworks, and programming languages along with being passionate about{' '}
        <span className="font-extrabold text-white">
          creating and innovating the ideas
        </span>{' '}
        of tomorrow. Let's{' '}
        <span className="font-extrabold text-white">explore</span> more by scrolling
        down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
