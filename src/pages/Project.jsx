import React from 'react';
import dataItems from '../../dataItems';
import WorkItem from '../components/workItem';
import Navbar from '../components/Navbar';

const Project = () => {
  let mykey = 0;
  return (
    <>
      <Navbar />
      <section id="projects">
        {
        dataItems.map((item) => {
          mykey += 1;
          return (
            <WorkItem myProj={item} key={mykey} />
          );
        })
      }
      </section>
    </>
  );
};

export default Project;
