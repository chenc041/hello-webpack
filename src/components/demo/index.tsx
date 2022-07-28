import React from 'react';

export const Demo = () => {
  const [name, setName] = React.useState('de');

  setTimeout(() => {
    setName('bc');
  }, 2000);

  return <div>demo {name} </div>;
};
