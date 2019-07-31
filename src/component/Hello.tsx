import * as React from 'react';
import style from './styles.less';
import Yao from './yaoyao.png';
import Demo from './Demo';

export interface HelloProps {
  name: string
}

const Hello: React.FunctionComponent<HelloProps> = (props) => {
  const { name } = props;
  return (
    <div className={style.hello}>
      <div>{name}</div>
      <Demo name='a`1s' />
      <img src={Yao} alt="test" />
      <img src="" alt="" />
    </div>
  );
};
export default Hello;
