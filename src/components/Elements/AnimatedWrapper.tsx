import { motion, Transition } from 'framer-motion'
import React, { FunctionComponent, PropsWithChildren } from 'react'

const MARGIN = '-50%'

const transition: Transition = {
  duration: 0.75,
  ease: 'easeInOut',
}

const AnimatedWrapper: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ borderRadius: '30px', scale: 0.95, y: 0, z: 0 }}
      whileInView={{ borderRadius: 0, scale: 1, y: '7.5vh', z: 10 }}
      viewport={{ amount: 0.8 }}
      transition={transition}
      style={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper
