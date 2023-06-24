'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Projects |" textStyles="text-center" />
        <TitleText
          title={<>Choose the project you wish <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <p className="font-normal text-center text-[16px] leading-[20.16px] text-white">
          Click the github icon to see source code
        </p>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleHover={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
