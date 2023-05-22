import React, { useEffect } from 'react';
import dataItems from '../../dataItems';
import WorkItem from './workItem';

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  const projects = document.getElementsByClassName('work-item');
  for (let i = 0; i < projects.length; i += 1) {
    const project = projects[i];
    if (isElementInViewport(project) && !project.classList.contains('animate')) {
      project.classList.remove('inactive');
      project.classList.add('animate');
    }
  }
}

export default function Works() {
  let mykey = 0;
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id="work">
      {
        dataItems.map((item) => {
          mykey += 1;
          return (
            <WorkItem myProj={item} key={mykey} index={mykey} />
          );
        })
      }
    </section>
  );
}
