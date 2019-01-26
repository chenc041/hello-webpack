import React from 'react';
import style from './styles.less';
import Yao from './yaoyao.png';

const Hello = () => {
  console.log(process.env.NODE_ENV) // eslint-disable-line
  return (
    <div className={style.hello}>
      hello wqqqq？？？？111
      <img src={Yao} alt="test" />
      <img src="" alt="" />
    </div>
  );
};
export default Hello;
