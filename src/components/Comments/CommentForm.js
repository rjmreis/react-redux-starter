import React from 'react';
import { browserHistory } from 'react-router';
import Input from 'react-toolbox/lib/input';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import classnames from 'classnames';
import style from './style.scss'; // eslint-disable-line

const CommentForm = ({ comment, onSave, onChange, onDelete, saving, errors }) => {

  return (
    <div>
      <div className={classnames("row", style.toolbar)}>
        <div className={classnames("col-xs-12", "end-xs")}>
          <Button label="Back" icon="reply" raised onMouseUp={() => {
            browserHistory.push('/comments');
          } } />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <Card>
            <CardTitle title="Comment Details" />
            <form className={style.commentForm}>
              <Input type="text" label="Title"
                name="title" value={comment.title} onChange={onChange} error={errors.title}
                maxLength={20} />
              <Input type="text" label="Description"
                name="description" multiline value={comment.description} onChange={onChange}
                error={errors.description} maxLength={100} />
              <div className={classnames("row", style.bottomOptions)}>
                <div className={classnames("col-xs-6", "start-xs")}>
                  {(comment.id ?
                    <Button type="button" icon="delete" label="Delete"
                      disabled={saving} raised onClick={onDelete} /> : ''
                  )}
                </div>
                <div className={classnames("col-xs-6", "end-xs")}>
                  <Button type="submit" icon="done" label="Save"
                    disabled={saving} onClick={onSave} raised primary />
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  comment: React.PropTypes.object,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CommentForm;
