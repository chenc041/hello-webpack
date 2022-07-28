import React from 'react';
import styles from '~/pages/home/index.scss';
import { Demo } from '~/components/demo';

export const Home = () => {
  const [name, setName] = React.useState('1');

  setTimeout(() => {
    setName('2');
  }, 10000);

  return (
    <div className={styles.home}>
      home {name} <Demo></Demo>
    </div>
  );
};
