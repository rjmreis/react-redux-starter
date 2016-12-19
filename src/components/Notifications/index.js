import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Snackbar } from 'react-toolbox';
import * as actions from '../../actions/notificationActions';
import style from './style.scss'; // eslint-disable-line

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.hideNotification = this.hideNotification.bind(this);
  }

  hideNotification() {
    this.props.actions.hideNotification();
  }

  render() {
    const { notifications } = this.props;

    return (
      <Snackbar
        active={notifications.active}
        label={notifications.message.toUpperCase()}
        className={style.notificationSnackbar}
        timeout={3000}
        onTimeout={() => this.hideNotification()}
        />
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  notifications: state.notifications
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);