import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './sideNav.css';

const myLinks = [
  { to: '/', name: 'Home' },
  { to: '/project', name: 'Projects' },
  { to: '/about', name: 'About' },
  { to: '/contact', name: 'Contact' },
];

let mykey = 'Abcdef1';

const SideNav = () => {
  const sidenavRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    instanceRef.current = window.M.Sidenav.init(sidenavRef.current);
  }, []);

  const handleNav = () => {
    if (instanceRef.current && instanceRef.current.isOpen) {
      instanceRef.current.close();
    } else if (instanceRef.current) {
      instanceRef.current.open();
    }
  };

  return (
    <>
      <ul id="slide-out" className="sidenav" ref={sidenavRef}>
        <li>
          <div className="user-view">
            <a href="/"><img id="my-profile" src="./images/Profile.jpg" alt="none" /></a>
            <p className="black-text name">Shakir Hussain</p>
            <a href="#email"><span className="blue-text email">shakir.hussain6969@gmail.com</span></a>
          </div>
        </li>
        {
              myLinks.map((mylink) => {
                mykey += 1;
                return (
                  <li key={mykey}>
                    <NavLink
                      className={(link) => (link.isActive ? 'link mobile' : 'link')}
                      to={mylink.to}
                    >
                      { mylink.name }
                    </NavLink>
                  </li>
                );
              })
          }
        <li><a className="sidenav-close" href="/" onClick={handleNav}><i className="material-icons">arrow_back</i></a></li>
      </ul>
      <a href="/" data-target="slide-out" className="sidenav-trigger" onClick={handleNav}><i className="material-icons"><i className="material-icons">menu</i></i></a>
    </>
  );
};

export default SideNav;
