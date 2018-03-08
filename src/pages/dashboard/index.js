import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './styles.css';

export default class Dashboard extends Component {
  render() {
    return (
      <main>
        <Helmet
          title='AxialRP: Home Page'
          meta={[
            {
              property: 'og:title',
              content: 'AxialRP: Home Page'
            }
          ]} />

          <h1 className="title">Welcome to AxialRP</h1>
      </main>
    );
  }
}
