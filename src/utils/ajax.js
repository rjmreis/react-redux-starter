import { ajaxCallError } from '../actions/ajaxStatusActions';

export const handleAjaxError = (dispatch, error) => {
  dispatch(ajaxCallError(error));
};
