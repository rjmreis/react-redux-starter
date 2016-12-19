/**
 * PROXY API - AJAX calls should be implemented at this layer.
 * For demo purposes localStorage is used instead
 */
const comments = {
  listComments: () => new Promise(function (resolve) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    resolve(comments);
  }),

  saveComment: (comment) => {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    if (comment.id) {
      // Update array with new object
      let newComments = [...comments.filter(_comment => _comment.id !== comment.id), Object.assign({}, comment)];
      localStorage.setItem('comments', JSON.stringify(newComments));

      return new Promise(function (resolve) {
        resolve(comment);
      });
    } else {
      // Create comment
      let newComment = Object.assign({}, comment);
      newComment.id = Math.floor((Date.now() + Math.random()) * 0x10000); // Generate random id

      // Update array with new object
      let newComments = [...comments, Object.assign({}, newComment)];
      localStorage.setItem('comments', JSON.stringify(newComments));

      return new Promise(function (resolve) {
        resolve(newComment);
      });
    }
  },

  deleteComment: (comment) => {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    let newComments = comments.filter(_comment => _comment.id !== comment.id);
    localStorage.setItem('comments', JSON.stringify(newComments));

    return new Promise(function (resolve) {
      resolve(true);
    });
  }
};

export default comments;
