import * as types from '../constants/actionTypes';
import api from '../api';
import { beginAjaxCall } from './ajaxStatusActions';
import { handleAjaxError } from '../utils/ajax';

export const listComments = () => (
  (dispatch) => {
    dispatch(beginAjaxCall());

    return api.comments.listComments()
      .then(comments => {
        dispatch({ type: types.LIST_COMMENTS_SUCCESS, comments: comments });
      }).catch(error => {
        handleAjaxError(dispatch, error);
        throw error;
      });
  }
);

export const saveComment = (comment) => (
  (dispatch) => {
    dispatch(beginAjaxCall());

    return api.comments.saveComment(comment)
      .then(savedComment => {
        comment.id ? dispatch({ type: types.UPDATE_COMMENT_SUCCESS, comment: savedComment }) :
          dispatch({ type: types.CREATE_COMMENT_SUCCESS, comment: savedComment });
      }).catch(error => {
        handleAjaxError(dispatch, error);
        throw (error);
      });
  }
);

export const deleteComment = comment => (
  (dispatch) => {
    dispatch(beginAjaxCall());

    let commentId = comment.id;
    return api.comments.deleteComment(comment)
      .then(() => {
        dispatch({ type: types.DELETE_COMMENT_SUCCESS, commentId: commentId });
      }).catch(error => {
        handleAjaxError(dispatch, error);
        throw (error);
      });
  }
);
