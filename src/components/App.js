import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'react-toolbox';
import Main from './Main';
import LoginPage from './Auth/LoginPage';

const App = (props) => (
  <Layout>
    {props.isAuthenticated ? <Main routes={props.routes}>{props.children}</Main> : <LoginPage />}
  </Layout>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
