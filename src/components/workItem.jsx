import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

export default function WorkItem({ myProj, index }) {
  const {
    title, info, tech, images, buttons,
  } = myProj;

  return (
    <div className="work-item inactive">
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
        <Popup trigger={<button type="button" id="mybtn" className="normal-button">See Details</button>} position={index % 2 === 0 ? 'right' : 'right center'}>
          <div id="showDetails">
            <h1 className="showtitle">
              {title}
            </h1>
            <div className="thumbnail">
              <img src={images[0]} alt="Project" />
            </div>
            <ul className="showdescription">
              <li className="showtext">
                <p>
                  {info}
                </p>
              </li>
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
            </ul>
          </div>
        </Popup>
      </div>
    </div>
  );
}

WorkItem.defaultProps = {
  myProj: {
    title: '',
    info: '',
    tech: '',
    images: '',
    buttons: '',
  },
  index: 0,
};

WorkItem.propTypes = {
  myProj: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    tech: PropTypes.oneOfType([PropTypes.array]),
    images: PropTypes.oneOfType([PropTypes.array]),
    buttons: PropTypes.oneOfType([PropTypes.array]),
  }),
  index: PropTypes.number,
};
