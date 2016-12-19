import React from 'react';
import style from './style.scss'; // eslint-disable-line

const Welcome = () => (
  <section className={style.welcome}>
    <div className="row end-xs">
      <div className="col-xs-12">
        <h3 className={style.title}>Welcome to react-redux-starter</h3>
        <div className={style.subtitle}>A React/Redux starter project with login and basic CRUD functionality in a Material flavor</div>
      </div>
    </div>
  </section>
);

export default Welcome;
