import * as React from 'react';
import { connect } from 'react-redux';
import style from './styles.less';

export interface HelloProps {
  name: string;
  count: { count: number };
  dispatch(params: {
    type: string;
    payload: {
      [key: string]: string | number | Record<string, number>;
    };
  }): void;
}

let age = 10;

class Hello extends React.PureComponent<HelloProps, {}> {
  state = {
    age: 10,
  };

  handleClick = () => {
    const { dispatch } = this.props;
    age += 10;
    dispatch({
      type: 'count/increment',
      payload: {
        age,
      },
    });
  };

  handleClickAsync = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'count/incrementAsync',
      payload: {
        count: 9999999999,
      },
    });
  };

  handleDemoClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'demo/incrementDemo',
      payload: {
        age: 100,
      },
    });
  };

  handleDemoClickAsync = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'demo/incrementAsyncDemo',
      payload: {
        count: 9999999999,
      },
    });
  };

  render() {
    return (
      <div className={style.hello}>
        <div
          onClick={this.handleClick}
          style={{
            width: 300,
            height: 40,
            border: '1px solid red',
            marginBottom: 20,
            fontSize: '16px',
            lineHeight: '40px',
            textAlign: 'center',
          }}
        >
          increment
        </div>
        <div
          onClick={this.handleDemoClick}
          style={{
            width: 300,
            height: 40,
            border: '1px solid red',
            marginBottom: 20,
            fontSize: '16px',
            lineHeight: '40px',
            textAlign: 'center',
          }}
        >
          demo increment
        </div>
        <div
          onClick={this.handleDemoClickAsync}
          style={{
            width: 300,
            height: 40,
            border: '1px solid red',
            marginBottom: 20,
            fontSize: '16px',
            lineHeight: '40px',
            textAlign: 'center',
          }}
        >
          demo incrementAsync
        </div>
        <div
          onClick={this.handleClickAsync}
          style={{
            width: 300,
            height: 40,
            border: '1px solid red',
            marginBottom: 20,
            fontSize: '16px',
            lineHeight: '40px',
            textAlign: 'center',
          }}
        >
          incrementAsync
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ count, demo }: { count: any; demo: any }) => {
  return {
    demo,
    count,
  };
};

export default connect(mapStateToProps)(Hello);
