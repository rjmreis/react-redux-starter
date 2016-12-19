import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Card, CardText } from 'react-toolbox/lib/card';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

const CommentList = ({ comments }) => {

  return (
    <Card>
      {(comments.length > 0 ?
        (<div>
          <List selectable ripple>
            <ListSubHeader caption={'Comments' + '(' + comments.length + ')'} />
            {comments.map(comment =>
              <ListItem
                key={comment.id}
                caption={comment.title}
                legend={comment.description}
                onClick={() => browserHistory.push('/comments/' + comment.id)}
                rightIcon="assignment" />
            )}
          </List>
        </div>
        ) :
        <CardText>No Comments yet!</CardText>
      )}
    </Card>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
