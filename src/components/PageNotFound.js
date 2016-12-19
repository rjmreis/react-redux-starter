import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import style from './style.scss'; // eslint-disable-line

const PageNotFound = () => {
  return (
    <div className={style.mainContent}>
      <div className={style.pageNotFound}>
        <p>Page Not Found</p>
        <Link to="/">
          <Button label="Go back to homepage" raised />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
