import React from 'react';
import dataItems from '../../dataItems';
import WorkItem from './workItem';

export default function Works() {
  let mykey = 0;
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
