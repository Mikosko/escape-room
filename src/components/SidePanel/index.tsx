import * as React from 'react';

export namespace SidePanel {
  export interface Props { }
  export interface State { }
}

export class SidePanel extends React.PureComponent<SidePanel.Props, SidePanel.State> {
  render() {
    return (
      <div>
        {this.props.children}
        Ahoj
      </div>
    );
  }
}
