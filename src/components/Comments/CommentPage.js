import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/commentActions';
import CommentMain from './CommentMain';

class CommentsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { listComments } = this.props.actions;
    listComments();
  }

  render() {
    const { comments } = this.props;

    return (
      <CommentMain comments={comments} />
    );
  }
}

CommentsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);
