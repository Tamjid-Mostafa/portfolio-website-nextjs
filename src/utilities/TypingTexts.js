import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utilities/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
  >
    {
      Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === '' ? '\u00A0' : letter}
        </motion.span>
      ))
    }
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
  >{title}
  </motion.h2>
);
