import * as React from 'react';

export interface DemoProps {
  name: string;
}

class Demo extends React.Component<DemoProps, {}> {
  state = {
    age: '13',
  }
  test = (e: any) => {
    const { value } = e.target;
    console.log('___________')
    this.setState({
      age: value
    })
  }
  render() {
    const { name } = this.props;
    const { age } = this.state;
    return <div>manaaaa aaaa aaa???? {name} </div>;
  }
}
export default Demo;
