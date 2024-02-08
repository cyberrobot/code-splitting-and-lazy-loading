import React from 'react';

export const DelayedIntro = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Resolve the promise with the Intro component and pass the defaultCount prop
      resolve(
        import('./Intro').then((module) => {
          return {
            default: (props) => {
              return React.createElement(module.default, {
                defaultCount: 5,
                ...props,
              });
            },
          };
        })
      );
    }, 3000);
  });
});
