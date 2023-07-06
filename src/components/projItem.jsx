import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function ProjItem({ myProj }) {
  const {
    title, info, tech, images, buttons,
  } = myProj;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
        filter: 'blur(10px)',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 50,
      }}
      className="proj-item inactive"
    >
      <div className="thumbnail">
        <img src={images[0]} alt="N/A" />
      </div>
      <div className="primary-text">
        <h1 className="title">
          {title}
        </h1>
        <p className="description">
          {info}
        </p>
        <li className="showbuttons">
          <ul className="showtech">
            {
                      tech.map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))
                    }
          </ul>
          <ul>
            <li>
              <a href={buttons[0][0]}>
                <img src={buttons[1][0]} alt="" />
              </a>
            </li>
            <li>
              <a href={buttons[0][1]}>
                <img src={buttons[1][1]} alt="" />
              </a>
            </li>
          </ul>
        </li>
      </div>
    </motion.div>
  );
}

ProjItem.defaultProps = {
  myProj: {
    title: '',
    info: '',
    tech: '',
    images: '',
    buttons: '',
  },
};

ProjItem.propTypes = {
  myProj: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    tech: PropTypes.oneOfType([PropTypes.array]),
    images: PropTypes.oneOfType([PropTypes.array]),
    buttons: PropTypes.oneOfType([PropTypes.array]),
  }),
};
