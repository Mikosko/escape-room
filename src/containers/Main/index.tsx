import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getPosts, GetPostsAction } from '../../actions/Posts';
import { SidePanel } from '../../components';
import * as route from '../../constants/routes';

export namespace Main {
  export interface Props { }
  export interface Actions {
    getPosts: GetPostsAction;
  }
  export interface State { }
}

const mapStateToProps = (state: AppState): Main.Props => ({});
const mapDispatchToProps = (dispatch): Main.Actions => {
  return (
    bindActionCreators(
      {
        getPosts,
      },
      dispatch,
    )
  );
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends React.Component<Main.Props, Main.State> {
  componentDidMount() {
    const { getPosts } = this.props as Main.Actions;
    getPosts();
  }

  render() {
    return (
      <div>
        <SidePanel>
          Hellos
        </SidePanel>
        <h1>Hello world</h1>
        <hr />
        <Link to={route.TEST}>Link to Test</Link>
      </div>
    );
  }
}
