import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as actions from '../../actions/commentActions';
import { showNotification } from '../../actions/notificationActions';
import CommentForm from './CommentForm';
import Comment from '../../models/Comment';

class ManageCommentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: Object.assign({}, props.comment),
      errors: {},
      saving: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentWillMount() {
    const { listComments } = this.props.actions;

    if (!this.state.comments) {
      listComments();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comment !== null && this.props.comment.id !== nextProps.comment.id) {
      // Necessary to populate form when an existing comment is loaded
      this.setState({ comment: Object.assign({}, nextProps.comment) });
    }
  }

  handleChange(value, event) {
    const field = event.target.name;
    let comment = this.state.comment;
    comment[field] = value;
    return this.setState({ comment: comment });
  }

  saveComment(event) {
    event.preventDefault();

    this.setState({ saving: true });

    this.props.actions.saveComment(this.state.comment)
      .then(() => {
        this.props.showNotification('Comment saved successfully');
        browserHistory.push('/comments');
      })
      .catch(error => {
        this.setState({ saving: false });
        this.props.showNotification(error.message);
      });
  }

  deleteComment(event) {
    event.preventDefault();

    this.setState({ saving: true });

    this.props.actions.deleteComment(this.state.comment)
      .then(() => {
        this.setState({ saving: false });
        this.props.showNotification('Comment deleted successfully');
        browserHistory.push('/comments');
      })
      .catch(error => {
        this.setState({ saving: false });
        this.props.showNotification(error.message);
      });
  }

  render() {
    return (
      <section>
        <CommentForm
          comment={this.state.comment}
          onChange={this.handleChange}
          onSave={this.saveComment}
          onDelete={this.deleteComment}
          errors={this.state.errors}
          saving={this.state.saving}
          />
      </section>
    );
  }
}

ManageCommentPage.propTypes = {
  comment: PropTypes.object,
  actions: PropTypes.object.isRequired,
  showNotification: PropTypes.func.isRequired
};

const getCommentById = (comments, id) => {
  const comment = comments.filter(comment => comment.id == id);
  if (comment.length) return comment[0]; //since filter returns an array, have to grab the first.
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const commentId = ownProps.params.id;

  let comment = new Comment();

  if (commentId && state.comments.length > 0) {
    comment = getCommentById(state.comments, commentId);
  }

  return {
    comment: comment
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  showNotification: bindActionCreators(showNotification, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCommentPage);
