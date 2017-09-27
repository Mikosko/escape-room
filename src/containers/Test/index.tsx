import * as React from 'react';
import { Link } from 'react-router-dom';
import * as route from '../../constants/routes';

export namespace Test {
  export interface Props { }

  export interface State { }
}

export default class Test extends React.Component<Test.Props, Test.State> {
  render() {
    return (
      <div>
        <Link to={route.MAIN}>Link to Main</Link>
      </div>
    );
  }
}
