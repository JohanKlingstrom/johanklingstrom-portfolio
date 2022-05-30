import React from 'react';
import { motion } from 'framer-motion';

const MotionWrapper = (Component, classNames) => function HOC() {
  return (
    <motion.div
        whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.4 }}
        className={`${classNames} app__flex`}
        style={{zIndex: 5}}
        viewport={{ once: true }}
    >
        <Component />
    </motion.div>
  )
}

export default MotionWrapper;