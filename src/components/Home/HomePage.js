import React from 'react';
import { connect } from 'react-redux';
import Welcome from './Welcome';

export const HomePage = () => {
  return (
    <Welcome />
  );
};

export default connect()(HomePage);
