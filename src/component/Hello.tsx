import * as React from 'react';
import { connect } from 'react-redux';
import style from './styles.less';
import Yao from './yaoyao.png';

export interface HelloProps {
  name: string;
}

class Hello extends React.PureComponent<{}, {}> {
  handleClick = () => {
    // @ts-ignore
    const { dispatch } = this.props;
    dispatch({
      type: 'INCREMENT',
    });
  };

  render() {
    console.log(this.props, '-------');
    return (
      <div className={style.hello}>
        <div onClick={this.handleClick}>helo chenc</div>
        <img src={Yao} alt="test" />
      </div>
    );
  }
}

const mapStateToProps = (state: number) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps)(Hello);
