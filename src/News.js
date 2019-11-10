import React from 'react';
import Navigation from './Navigation';

class News extends React.Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <h1>News page, no need to be authenticated </h1>
      </div>
    );
  }
}

export default News;
