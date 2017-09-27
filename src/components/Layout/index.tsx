import * as React from 'react';
import withRouter from 'react-router-dom/withRouter';
import './style.scss';

@withRouter
export default class Layout extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}