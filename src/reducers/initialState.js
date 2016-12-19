export default {
  auth: {
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
  },
  comments: [],
  ajaxCallsInProgress: 0,
  notifications: {
    active: false,
    message: ''
  }
};
