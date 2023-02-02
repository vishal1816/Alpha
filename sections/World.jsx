"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { trackWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import { WorldCard, TitleText, TypingText } from "../components";

const World = () => {
  const [active, setActive] = useState("world-1");

  return (
    <>
      <section className={`${styles.paddings}`} id="explore">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText title="" textStyles="text-center" />
          <TitleText
            title={
              <>
               Our Products
              </>
            }
            textStyles="text-center"
          />
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-4">
            {trackWorlds.map((world, index) => {
              return <>
                 <WorldCard
                  key={world.id}
                  {...world}
                  index={index}
                  active={active}
                  handleClick={setActive}
                />
              </>;

           
            })}
           
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default World;