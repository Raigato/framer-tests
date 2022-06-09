import React, { FunctionComponent } from 'react'
import { motion, Transition, Variants } from 'framer-motion'

interface IAnimatedTextProps {
  text: string
}

const variants: Variants = {
  hidden: {
    opacity: 0.25,
  },
  shown: {
    opacity: 1,
  },
}

const AnimatedText: FunctionComponent<IAnimatedTextProps> = ({ text }) => {
  return (
    <h2>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial="hidden"
          whileInView="shown"
          viewport={{ margin: `0px 0px -${20 + index * 3}% 0px` }}
          transition={{ duration: 0.1 }}
          variants={variants}
        >
          {word}{' '}
        </motion.span>
      ))}
    </h2>
  )
}

export default AnimatedText
