'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Feedback = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ess5kze',
        'template_8hwk0t9',
        form.current,
        'E6-yoFVk4m5bXvgQ7',
      )
      .then(
        (error) => {
          alert(error.text);
        },
      );
    form.current.reset();
  };
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.20 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col justify-center gap-20`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-top flex-col sm:p-8 p-4 relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mb-4">
              Contact Me
            </h4>
            <p className="mt-[8px] font-normal sm:text-[20px] text-[12px] sm:leading-[22.68px] leading-[.68px] text-white mb-10">
              "A simple Hello can lead to a million things"
            </p>
          </div>
          <img
            src="/contactshake.png"
            className="w-50 h-50"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[700px] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-blue-500"
        >
          <form ref={form} onSubmit={sendEmail} className="mt-6">
            <div className="mb-4">
              <label
                className=" w-full block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className=" w-full block px-4 py-2 mt-2 shadow-glowDark bg-blue-200 bg-opacity-60 text-blac border border-blue-500 hover:bg-blue-300 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className=" w-full block px-4 py-2 mt-2 shadow-glowDark bg-blue-200 bg-opacity-60 text-black border border-blue-500 rounded-md hover:bg-blue-300 focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className=" w-full block px-4 py-2 mt-2 shadow-glowDark bg-blue-200 bg-opacity-60 text-black border border-blue-500 hover:bg-blue-300 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Message
              </label>
              <textarea
                name="message"
                className=" h-80 w-full block px-4 py-2 mt-2 shadow-glowDark bg-blue-200 bg-opacity-60 text-black border border-blue-500 hover:bg-blue-300 rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <input className="px-4 py-2 tracking-wide  shadow-glowDark text-white transition-colors duration-200 transform bg-gradient-to-br from-blue-500 to-blue-400 rounded-md hover:from-blue-500 hover:to-cyan-600 hover:shadow-glowLight focus:outline-none focus:bg-indigo-600"
                type="submit"
                value="Send"
              />
            </div>
          </form>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
