import { motion, Transition } from 'framer-motion'
import React, { FunctionComponent, PropsWithChildren } from 'react'

const MARGIN = '-50%'

const transition: Transition = {
  duration: 0.5,
  delay: 0.2,
  ease: 'easeInOut',
}

const AnimatedWrapper: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ padding: '1rem' }}
      whileInView={{ padding: 0 }}
      viewport={{ amount: 0.8 }}
      transition={transition}
    >
      <motion.div
        initial={{ borderRadius: '30px' }}
        whileInView={{ borderRadius: 0 }}
        viewport={{ amount: 0.8 }}
        transition={transition}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default AnimatedWrapper
