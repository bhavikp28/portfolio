'use client';

import { motion } from 'framer-motion';
import Iframe from 'react-iframe';
import styles from '../styles';

import { TitleText } from '../components';
import { staggerContainer, fadeIn} from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} id="getstarted">
    <TitleText title="Resume" className="justify-bottom" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} hidden mx-auto sm:flex lg:flex-row justfiy-between gap-16`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[500px] flex justify-between flex-col sm:p-8 p-4 relative"
      >
        <div className="feedback-gradient" />
        <div>
          <p className="mt-[70px] font-normal sm:text-[20px] text-[13px] sm:leading-[22.68px] grid grid-cols-3 gap-10 leading-[.68px] text-white mb-10">
            <img
              src="/icons/javascript.svg"
              className="w-12 h-12 object-contain hover:shadow-glowDark relative z-11"
            />
            <img
              src="/icons/html.svg"
              className="w-12 h-12 object-contain hover:shadow-glowDark"
            />
            <img
              src="/icons/css3.svg"
              className="w-12 h-12 object-contain hover:shadow-glowDark"
            />
            <img
              src="/icons/react.svg"
              className="w-12 h-12 object-contain relative hover:shadow-glowDark z-11"
            />
            <img
              src="/icons/redux.svg"
              className="w-12 h-12 object-contain hover:shadow-glowDark"
            />
            <img
              src="/icons/tailwind.svg"
              className="w-12 h-12 object-contain hover:shadow-glowDark"
            />
          </p>
          <br />
          <p className="mt-[8px] font-normal sm:text-[20px] text-[13px] sm:leading-[22.68px] grid grid-cols-3 gap-10 leading-[.68px] text-white mb-10">
            <img
              src="/icons/python.svg"
              className="w-12 h-12 object-contain hover:shadow-glowLight"
            />
            <img
              src="/icons/flask.svg"
              className="w-12 h-12 object-contain hover:shadow-glowLight"
            />
            <img
              src="/icons/java.svg"
              className="w-12 h-12 object-contain hover:shadow-glowLight"
            />
            <img
              src="/icons/cplus.svg"
              className="w-12 h-12 object-contain hover:shadow-glowLight"
            />
            <img
              src="/icons/c.svg"
              className="w-12 h-12 object-contain hover:shadow-glowLight"
            />
            <img
              src="/icons/matlab.svg"
              className="w-12 h-12 object-contain hover:shadow-glowLight"
            />
            <img
              src="/icons/nodejs.svg"
              className="w-12 h-12 object-contain hover:shadow-glowLight"
            />
            <img
              src="/icons/express.svg"
              className="w-12 h-12 object-contain hover:shadow-glowLight"
            />
            <img
              src="/icons/vscode.svg"
              className="w-12 h-12 object-contain hover:shadow-glowGreen"
            />
          </p>
          <br />
          <p className="mt-[8px] font-normal sm:text-[20px] text-[13px] sm:leading-[22.68px] grid grid-cols-3 gap-10 leading-[.68px] text-white mb-10"> 
            <img
              src="/icons/git.svg"
              className="w-12 h-12 object-contain hover:shadow-glowGreen"
            />
            <img
              src="/icons/azure.svg"
              className="w-12 h-12 object-contain hover:shadow-glowGreen"
            />
            <img
              src="/icons/aws.svg"
              className="w-12 h-12 object-contain hover:shadow-glowGreen"
            />
            <img
              src="/icons/android.svg"
              className="w-12 h-12 object-contain hover:shadow-glowGreen"
            />
            <img
              src="/icons/mysql.svg"
              className="w-12 h-12 object-contain hover:shadow-glowGreen"
            />
            <img
              src="/icons/mongodb.svg"
              className="w-12 h-12 object-contain hover:shadow-glowGreen"
            />
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <div className="mt-[31px] flex flex-col max-w-[600px] h-[1000px]">
          <Iframe
            src="/resume.pdf"
            height="sm:h-[830px] h-[640px]"
            overflow="hidden"
            className="sm:h-[830px] h-[640px]"
          />
        </div>
      </motion.div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} sm:hidden mx-auto flex lg:flex-row justify-center`}
    >
      <div className="mt-[31px] flex flex-col ">
        <Iframe
          src="/resume.pdf"
          height="445"
          overflow="hidden"
        />
      </div>
    </motion.div>
  </section>
);

export default GetStarted;
