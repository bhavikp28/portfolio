'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-5');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.30 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Projects" textStyles="text-center mr-5" />
        <TitleText
          title={<>Choose the project you wish <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <TypingText title="Click the github icon to see source code" textStyles="text-center" />
        <TypingText title="*Please allow time for deployment to fully start*" textStyles="text-center" />
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
