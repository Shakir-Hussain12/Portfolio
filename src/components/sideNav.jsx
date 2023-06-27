import React, { useEffect, useRef } from 'react';
import './sideNav.css';

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
            <a href="#user"><img className="circle" src="./images/Profile.jpg" alt="none" /></a>
            <a href="#name"><span className="black-text name">Shakir Hussain</span></a>
            <a href="#email"><span className="black-text email">shakir.hussain6969@gmail.com</span></a>
          </div>
        </li>
        <li><a href="#!">Home</a></li>
        <li><a className="waves-effect" href="#!">Projects</a></li>
        <li><div className="divider" /></li>
        <li><a className="waves-effect" href="#!">About</a></li>
        <li><a className="waves-effect" href="#!">Contact</a></li>
        <li><div className="divider" /></li>
        <li><a className="sidenav-close" href="#!" onClick={handleNav}>Hide</a></li>
      </ul>
      <a href="/" data-target="slide-out" className="sidenav-trigger hide-on-med-and-up" onClick={handleNav}><i className="material-icons">menu</i></a>
    </>
  );
};

export default SideNav;
