import React from 'react';
import { List, ListItem } from 'react-toolbox';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames';
import style from './style.scss'; // eslint-disable-line

const SideNavigation = () => {

  const components = {
    comments: {
      name: 'Comments',
      path: '/comments',
      icon: 'assignment'
    }
  };

  const drawerItems = Object.keys(components).map((key) => {
    return (
      <Link key={key} to={components[key].path} activeClassName={style.active}>
        <ListItem
          leftIcon={components[key].icon}
          caption={components[key].name}
          className={style.item}
          selectable
          />
      </Link>
    );
  });

  return (
    <aside className={classnames(style.root, style.navigation)}>
      <List className={style.list} selectable ripple>
        <IndexLink to="/" activeClassName={style.active}>
          <ListItem leftIcon="dashboard" caption="Home" className={style.item} selectable />
        </IndexLink>
        {drawerItems}
      </List>
      <footer className={style.footer}>
        <span className={style.footerTitle}>react-redux-starter</span>
        <span>by Ricardo Reis</span>
      </footer>
    </aside>
  );
};

export default SideNavigation;
