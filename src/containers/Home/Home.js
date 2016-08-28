import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <Helmet title="Travel + Leisure Home"
          meta={[{'name': 'description', 'content': 'Travel + Leisure Description'}
          ]} />
        <Helmet description="Travel + Leisure Description"/>
        <div className="container">
          <div className="content">
            <div className="jumbotron text-xs-center">
              <h1>{config.app.title}</h1>
              <h4>This React Home Page for {config.app.title}:</h4>
              <p>T+L Links</p>
              <ul>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
