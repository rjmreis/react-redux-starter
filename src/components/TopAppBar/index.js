import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import style from './style.scss'; // eslint-disable-line

const TopAppBar = ({actions, auth}) => {

  const userName = auth.user.name;

  return (
    <AppBar className={style.appbar} fixed>
      <Link to="/">
        <span className={style.appTitle}>react-redux-starter</span>
      </Link>
      <div className={style.companySettings}>
        <span>{userName}</span>
        <IconMenu icon="menu" position="topRight" className={style.menu}>
          <MenuItem value="signout" icon="exit_to_app" caption="Sign Out" onClick={actions.logoutUser} />
        </IconMenu>
      </div>
    </AppBar>
  );
};

TopAppBar.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default TopAppBar;
