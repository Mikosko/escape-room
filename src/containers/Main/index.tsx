import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import * as route from '../../constants/routes';

export namespace Main {
  export interface Props extends RouteComponentProps<void> { }

  export interface State { }
}

export default class Main extends React.Component<Main.Props, Main.State> {
  render() {
    return (
      <div>
        <Link to={route.TEST}>Link to Test</Link>
      </div>
    );
  }
}
