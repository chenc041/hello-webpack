import React from 'react'
import style from  './styles.less'
import Yao from './yaoyao.png';

const Hello = () => {
  return (
    <div className={style.hello}>
      hello wqqqq
      <img src={Yao} alt="test"/>
    </div>
  )
}
export default Hello;
