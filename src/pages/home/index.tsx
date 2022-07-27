import React from 'react';
import styles from '~/pages/home/index.scss';
import { Demo } from '~/components/demo';

export const Home = () => {
  return (
    <div className={styles.home}>
      home <Demo></Demo>
    </div>
  );
};
