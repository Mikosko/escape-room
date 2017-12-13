import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { SidePanel } from '../../components';
import * as route from '../../constants/routes';

import { getServices, GetServicesAction } from '../../actions/Services';
import { getStatusInfo, GetStatusInfoAction } from '../../actions/StatusInfo';

export namespace Main {
  export interface Props {
    statusInfo: ReducerState<StatusInfo>;
    services: ReducerState<AllServices>;

  }
  export interface Actions {
    getStatusInfo: GetStatusInfoAction;
    getServices: GetServicesAction;
  }
  export interface State { }
}

const mapStateToProps = (state: AppState): Main.Props => {
  return {
    statusInfo: state.statusInfo,
    services: state.services,
  };
};
const mapDispatchToProps = (dispatch): Main.Actions => {
  return (
    bindActionCreators(
      {
        getStatusInfo,
        getServices,
      },
      dispatch,
    )
  );
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends React.Component<Main.Props & Main.Actions, Main.State> {
  componentDidMount() {
    const { getStatusInfo, getServices } = this.props;
    getStatusInfo();
    getServices();
  }

  renderApi(data) {
    console.log(data);
    return Object.keys(data).map((value, index) => {
      return (
        <ul key={index}>
          <li><strong>{value}:</strong> {`${data[value]}`}</li>
        </ul>
      );
    });
  }

  render() {
    const { statusInfo, services } = this.props;
    return (
      <div>
        <SidePanel>
          {statusInfo.wasLoaded &&
            this.renderApi(statusInfo.data)
          }
          <hr />
          {services.wasLoaded &&
            services.data.services && services.data.services.map((value: Service) => {
              return this.renderApi(value);
            })
          }
        </SidePanel>
        <h1>Hello world</h1>
        <hr />
        <Link to={route.TEST}>Link to Test</Link>
      </div>
    );
  }
}
