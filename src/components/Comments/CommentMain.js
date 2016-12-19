import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import classnames from 'classnames';
import CommentList from './CommentList';
import style from './style.scss'; // eslint-disable-line

const Comments = ({ comments }) => {

  return (
    <div>
      <div className={classnames("row", style.toolbar)}>
        <div className="col-xs-8">
          <h4>Comments</h4>
        </div>
        <div className={classnames("col-xs-4", "end-xs")}>
          <Button label="Create" icon="assignment" raised onMouseUp={() => { browserHistory.push('/comments/new'); }} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
