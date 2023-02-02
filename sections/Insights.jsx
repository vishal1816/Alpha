'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CSa } from '.';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insight = () => {
  const [active, setActive] = useState('world-1');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="" textStyles="text-center" />
        <TitleText title={<>Our Partners</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-4">
          {/* <CSa /> */}
          {insights.map((world, index) => (
            
            <InsightCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}

            />
           
          ))}

          


        </div>
      </motion.div>
    </section>
  );
};

export default Insight;
