import React, { PropTypes } from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import style from './style.scss';

class Preloader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoading } = this.props;

    if (!isLoading) {
      return false;
    }

    return (
      <div className={style.showbox}>
        <div className={style.loader}>
          <ProgressBar mode="indeterminate" multicolor />
        </div>
      </div>
    );
  }
}

Preloader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Preloader;
