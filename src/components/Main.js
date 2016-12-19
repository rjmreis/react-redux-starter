import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-toolbox';
import TopAppBar from './TopAppBar';
import SideNavigation from './SideNavigation';
import MainContent from './MainContent';
import Preloader from './common/Preloader';
import Notifications from './Notifications';
import { logoutUser } from '../actions/authActions';

const Main = (props) => (
  <Panel>
    <TopAppBar actions={props.actions} auth={props.auth} />
    <SideNavigation />
    <MainContent routes={props.routes}>{props.children}</MainContent>
    <Preloader isLoading={props.isLoading} />
    <Notifications />
  </Panel>
);

Main.propTypes = {
  children: PropTypes.element,
  routes: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.ajaxCallsInProgress > 0,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    logoutUser: bindActionCreators(logoutUser, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);