import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel } from 'react-toolbox';
import Notifications from '../Notifications';
import LoginForm from './LoginForm';
import User from '../../models/User';
import * as actions from '../../actions/authActions';
import { showNotification } from '../../actions/notificationActions';
import style from './style.scss'; // eslint-disable-line

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creds: new User(),
      showValidationErrors: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(value, event) {
    let field = event.target.name;
    let creds = this.state.creds;
    creds[field] = value.trim();
    return this.setState({ creds: creds });
  }

  login(event) {
    event.preventDefault();

    let creds = { username: this.state.creds.username, password: this.state.creds.password };
    this.props.actions.loginUser(creds)
      .catch(() => {
        this.props.showNotification('Authentication failed');
      });
  }

  render() {
    return (
      <Panel>
        <hgroup>
          <h3>react-redux-starter</h3>
          <div className={style.subtitle}>by Ricardo Reis</div>
        </hgroup>

        <LoginForm creds={this.state.creds} login={this.login} onChange={this.handleChange} />

        <Notifications />
      </Panel>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  showNotification: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  showNotification: bindActionCreators(showNotification, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
