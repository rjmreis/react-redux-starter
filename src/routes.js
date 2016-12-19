/* eslint-disable import/no-named-as-default */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import HomePage from './components/Home/HomePage.js';
import CommentPage from './components/Comments/CommentPage.js';
import ManageCommentPage from './components/Comments/ManageCommentPage.js';
import PageNotFound from './components/PageNotFound.js';

export default (
  <Route path="/" component={App} name="Home">
    <IndexRoute component={HomePage} />
    <Route path="comments" name="Comments">
      <IndexRoute component={CommentPage} />
      <Route path="new" component={ManageCommentPage} name="new" />
      <Route path=":id" component={ManageCommentPage} name="#" />
    </Route>
    <Route path="*" component={PageNotFound} name="Not Found" />
  </Route>
);
