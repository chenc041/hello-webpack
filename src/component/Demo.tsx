import * as React from 'react';

export interface DemoProps {
  name: string;
}

class Demo extends React.Component<DemoProps, {}> {
  render() {
    const { name } = this.props;
    return <div>man ???? {name}</div>;
  }
}
export default Demo;
