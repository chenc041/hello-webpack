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
      type: 'count/increment',
      payload: {
        count: 9999999999,
      },
    });
  };

  render() {
    // @ts-ignore
    console.log(this.props.count);
    return (
      <div className={style.hello}>
        <div
          onClick={this.handleClick}
          style={{
            width: 120,
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
          onClick={this.handleClickAsync}
          style={{
            width: 120,
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

const mapStateToProps = ({ count }: { count: any }) => {
  return {
    count,
  };
};

export default connect(mapStateToProps)(Hello);
