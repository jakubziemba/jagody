import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.05,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
