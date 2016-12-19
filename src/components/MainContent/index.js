import React, { PropTypes } from 'react';
import 'react-toolbox/lib/commons.scss';
import Breadcrumbs from 'react-breadcrumbs';
import style from './style.scss'; // eslint-disable-line

const MainContent = (props) => (
  <article className={style.mainPage}>
    <div className={style.mainContent}>
      <div className={style.mainBreadcrumbs}>
        <Breadcrumbs routes={props.routes} separator=" / " displayMissing={false} />
      </div>
      {props.children}
    </div>
  </article>
);

MainContent.propTypes = {
  children: PropTypes.element,
  routes: PropTypes.array
};

export default MainContent;
