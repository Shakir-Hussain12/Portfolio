import React, { useEffect } from 'react';
import dataItems from '../../miniData';
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
  const button = document.querySelector('#expand');
  for (let i = 0; i < projects.length; i += 1) {
    const project = projects[i];
    if (isElementInViewport(project) && !project.classList.contains('animate') && project && button) {
      project.classList.remove('inactive');
      button.classList.remove('inactive');
      button.classList.add('animate');
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
            <WorkItem myProj={item} key={mykey} />
          );
        })
      }
      <center>
        <a href="/project" className="waves-effect waves-light btn teal darken-4 inactive" id="expand">
          <i className="material-icons right">featured_play_list</i>
          Click to See All Projects
        </a>
      </center>
    </section>
  );
}
